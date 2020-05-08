export const emptyStageAssetId = '0000000000000000000000000000000e';
export const emptyStageFileName = `${emptyStageAssetId}.svg`;

const emptyStage = {
    "isStage": true,
    "name": "Stage",
    "variables": {},
    "lists": {},
    "blocks": <any>{},
    "broadcasts": {
        "BroadcastStartCountdown": "StartCountdown",
        "BroadcastCountdownFinished": "CountdownFinished"
    },
    "comments": {},
    "currentCostume": 0,
    "costumes": [
        {
            "assetId": emptyStageAssetId,
            "name": "empty",
            "md5ext": emptyStageFileName,
            "dataFormat": "svg",
            "rotationCenterX": 240,
            "rotationCenterY": 180
        }
    ],
    "sounds": [],
    "layerOrder": 0
};

export const startCountdownOnGameStartBlocks = {
    "WhenFlagClicked": {
        "opcode": "event_whenflagclicked",
        "next": "TriggerCountdownBroadcast",
        "parent": null,
        "inputs": {},
        "fields": {},
        "shadow": false,
        "topLevel": true,
        "x": 0,
        "y": 0
    },
    "TriggerCountdownBroadcast": {
        "opcode": "event_broadcast",
        "next": null,
        "parent": "WhenFlagClicked",
        "inputs": {
            "BROADCAST_INPUT": [
                1,
                [
                    11,
                    "StartCountdown",
                    "BroadcastStartCountdown"
                ]
            ]
        },
        "fields": {},
        "shadow": false,
        "topLevel": false
    }
};

export function buildStage(stageBlocks: any): any {
    emptyStage.blocks = stageBlocks;
    return emptyStage;
}

const spriteBlocks = {
    "WhenStartCountdownReceived": {
        "opcode": "event_whenbroadcastreceived",
        "next": "SwitchToFirstCostume",
        "parent": null,
        "inputs": {},
        "fields": {
            "BROADCAST_OPTION": [
                "StartCountdown",
                "BroadcastStartCountdown"
            ]
        },
        "shadow": false,
        "topLevel": true,
        "x": 0,
        "y": 0
    },
    "SwitchToFirstCostume": {
        "opcode": "looks_switchcostumeto",
        "next": "Repeat",
        "parent": "WhenStartCountdownReceived",
        "inputs": {
            "COSTUME": [
                1,
                "CustomeReference"
            ]
        },
        "fields": {},
        "shadow": false,
        "topLevel": false
    },
    "CustomeReference": {
        "opcode": "looks_costume",
        "next": null,
        "parent": "SwitchToFirstCostume",
        "inputs": {},
        "fields": {
            "COSTUME": [
                "0", // will be set in factory method
                null
            ]
        },
        "shadow": true,
        "topLevel": false
    },
    "Repeat": {
        "opcode": "control_repeat",
        "next": null,
        "parent": "SwitchToFirstCostume",
        "inputs": {
            "TIMES": [
                1,
                [
                    6,
                    "0" // will be set in factory method
                ]
            ],
            "SUBSTACK": [
                2,
                "WaitSecond"
            ]
        },
        "fields": {},
        "shadow": false,
        "topLevel": false
    },
    "WaitSecond": {
        "opcode": "control_wait",
        "next": "NextCostume",
        "parent": "Repeat",
        "inputs": {
            "DURATION": [
                1,
                [
                    5,
                    "1"
                ]
            ]
        },
        "fields": {},
        "shadow": false,
        "topLevel": false
    },
    "NextCostume": {
        "opcode": "looks_nextcostume",
        "next": null,
        "parent": "WaitSecond",
        "inputs": {},
        "fields": {},
        "shadow": false,
        "topLevel": false
    }
};

const spriteWithoutCostumes = {
    "isStage": false,
    "name": "Countdown",
    "variables": {},
    "lists": {},
    "broadcasts": {},
    "blocks": {},
    "comments": {},
    "currentCostume": 0,
    "costumes": <any[]>[],
    "sounds": [],
    "layerOrder": 1,
    "visible": true,
    "x": 0,
    "y": 0,
    "size": 100,
    "direction": 90,
    "draggable": false,
    "rotationStyle": "all around"
};

export function buildCountdownSprite(countdownMax: number): any {
    const countdownMaxString = countdownMax.toString();
    
    spriteBlocks.CustomeReference.fields.COSTUME[0] = countdownMaxString;
    (<(number | string)[]>spriteBlocks.Repeat.inputs.TIMES[1])[1] = countdownMaxString;

    spriteWithoutCostumes.blocks = spriteBlocks;
    return spriteWithoutCostumes;
}

export function buildProject(countdownMax: number): any {
    return {
        "targets": [
            buildStage(startCountdownOnGameStartBlocks),
            buildCountdownSprite(countdownMax)
        ],
        "monitors": [],
        "extensions": [],
        "meta": {
            "semver": "3.0.0",
            "vm": "0.2.0-prerelease.20200402182733",
            "agent": "Dummy"
        }
    };
}