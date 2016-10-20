using System.Collections.Generic;
using static System.Console;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Schiebe(
                3,      // Die Nummer des größten (=untersten) Spielsteins 
                'L',    // Ausgangsstange
                'R',    // Zielstange
                'M');   // Stange, die als Zwischenablage verwendet wird
        }

        public static void Schiebe(int spielsteinZuVerschieben, char von, char ueber, char nach)
        {
            // 0 ist unser Abbruchkriterium, da es keinen Spielstein 0 gibt.
            if (spielsteinZuVerschieben > 0) 
            {
                // Verschiebe alles über dem aktuellen Spielstein auf die 
                // Zwischenablage 'ueber'. 'nach' dient in diesem Fall
                // als neue Zwischenablage.
                Schiebe(spielsteinZuVerschieben - 1, von, nach, ueber);

                // Schiebe den aktuellen Spielstein von 'von' nach 'nach'
                WriteLine($"Schiebe {spielsteinZuVerschieben} von {von} nach {nach}");

                // Vorhin haben wir die Spielsteine über dem aktuellen
                // Spielstein auf der Zwischenablage 'ueber' geparkt.
                // netzt müssen wir sie von dort wieder holen und dabei
                // 'von' als Zwischenablage verwenden.
                Schiebe(spielsteinZuVerschieben - 1, ueber, von, nach);
            }
        }
    }
}
