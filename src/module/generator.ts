export class MelodyInput {
    numOfNotes: number = 32;
    noteSet: NoteSet = new NoteSet();
    bottom: number = 60;
    top: number = 84;
}

export class ChordInput {
    numOfChords: number = 16;
    noteSet: NoteSet = new NoteSet();
    allowM: boolean = false;
    allowm: boolean = false;
    allow7: boolean = false;
    allowM7: boolean = false;
    allowm7: boolean = false;
    allowm7b5: boolean = false;
    allowdim: boolean = false;
    allowaug: boolean = false;
    allow7sus4: boolean = false;
    allowIon: boolean = false;
    allowDor: boolean = false;
    allowPhr: boolean = false;
    allowLyd: boolean = false;
    allowMixo: boolean = false;
    allowAeo: boolean = false;
    allowLoc: boolean = false;
    otherChords: Array<string> = new Array();
}

export class RhythmInput {
    numOfNotes: number = 32;
    unitLength: number = 8;
    allowedLengths: Array<boolean> = [
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ];
}

export class NoteSet {
    hasC: boolean = false;
    hasCis: boolean = false;
    hasD: boolean = false;
    hasEs: boolean = false;
    hasE: boolean = false;
    hasF: boolean = false;
    hasFis: boolean = false;
    hasG: boolean = false;
    hasGis: boolean = false;
    hasA: boolean = false;
    hasB: boolean = false;
    hasH: boolean = false;
}
