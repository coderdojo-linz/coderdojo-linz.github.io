// Adds missing CoderDojo events to the `events` collection in MongoDB Atlas.
//
// Usage:
//   npm run add-events -- --dry-run   # show what would be inserted, write nothing
//   npm run add-events                # insert the missing events
//
// Configuration comes from .env (see .env.example):
//   MONGODB_URI         required, Atlas connection string (mongodb+srv://...)
//   MONGODB_DB          optional, default "member-management"
//   MONGODB_COLLECTION  optional, default "events"
//
// To add the next semester, edit the EVENTS array below and run the script again.
// Dates that already exist in the collection are skipped, so re-running is safe.

import { MongoClient } from 'mongodb';

const LOCATIONS = {
  GG:
    '<a href="https://grandgarage.eu/" target="_blank">Grand Garage</a>, 2. Stock, ' +
    '<a href="https://www.google.com/maps/place/GRAND+GARAGE+%7C+CAP.future+GmbH/@48.3124962,14.297219,17z/data=!3m2!4b1!5s0x477398260d6e0a7f:0x2eddb911fd7cd0b0!4m5!3m4!1s0x47739965151ec903:0xa538245f2814695c!8m2!3d48.3124927!4d14.299413" target="_blank">Peter-Behrens-Platz 6, 4020 Linz</a>',
  Wissensturm:
    '<a href="https://wissensturm.linz.at/" target="_blank">Wissensturm Linz</a>, 9.+12. Stock, ' +
    '<a href="https://wissensturm.linz.at/anreise.php" target="_blank">Kärntnerstraße 26, 4020 Linz</a>',
};

// [date (YYYY-MM-DD), location key]
// Source: https://app.rallly.co/invite/b5m5ijmJo5I1 (CoderDojo Fall/Winter 2026)
const EVENTS = [
  ['2026-09-18', 'Wissensturm'],
  ['2026-10-02', 'GG'],
  ['2026-10-16', 'Wissensturm'],
  ['2026-11-06', 'GG'],
  ['2026-11-20', 'Wissensturm'],
  ['2026-12-04', 'GG'],
  ['2026-12-18', 'Wissensturm'],
];

const EVENT_TYPE = 'CoderDojo';

function toDocument([isoDate, locationKey]) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) {
    throw new Error(`Invalid date "${isoDate}", expected YYYY-MM-DD`);
  }
  const location = LOCATIONS[locationKey];
  if (!location) {
    throw new Error(`Unknown location key "${locationKey}" for ${isoDate}`);
  }
  return {
    date: new Date(`${isoDate}T00:00:00.000Z`),
    type: EVENT_TYPE,
    location,
    workshops: [],
  };
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || 'member-management';
  const collectionName = process.env.MONGODB_COLLECTION || 'events';

  if (!uri) {
    console.error('MONGODB_URI is not set. Copy .env.example to .env and fill in the connection string.');
    process.exit(1);
  }

  const candidates = EVENTS.map(toDocument);
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const collection = client.db(dbName).collection(collectionName);

    const existing = await collection
      .find({ date: { $in: candidates.map((d) => d.date) } }, { projection: { date: 1, type: 1 } })
      .toArray();
    const existingDates = new Set(existing.map((e) => e.date.toISOString()));

    const toInsert = candidates.filter((d) => !existingDates.has(d.date.toISOString()));
    const skipped = candidates.filter((d) => existingDates.has(d.date.toISOString()));

    for (const d of skipped) {
      console.log(`skip    ${d.date.toISOString().slice(0, 10)}  (already exists)`);
    }
    for (const d of toInsert) {
      const label = Object.keys(LOCATIONS).find((k) => LOCATIONS[k] === d.location);
      console.log(`${dryRun ? 'would insert' : 'insert '} ${d.date.toISOString().slice(0, 10)}  ${label}`);
    }

    if (dryRun) {
      console.log(`\nDry run: ${toInsert.length} to insert, ${skipped.length} skipped. Nothing written.`);
      return;
    }

    if (toInsert.length === 0) {
      console.log('\nNothing to insert.');
      return;
    }

    const result = await collection.insertMany(toInsert);
    console.log(`\nInserted ${result.insertedCount} event(s) into ${dbName}.${collectionName}:`);
    for (const [index, id] of Object.entries(result.insertedIds)) {
      console.log(`  ${id}  ${toInsert[index].date.toISOString().slice(0, 10)}`);
    }
  } finally {
    await client.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
