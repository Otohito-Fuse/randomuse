export class MelodyInput {
    numOfNotes: number = 32;
    noteSet: NoteSet = new NoteSet();
    bottom: number = 60;
    top: number = 84;
}

export class ChordInput {
    numOfChords: number = 16;
    noteSet: NoteSet = new NoteSet();
    pM: number = 0;
    pm: number = 0;
    p7: number = 0;
    pM7: number = 0;
    pm7: number = 0;
    pm7b5: number = 0;
    pdim: number = 0;
    paug: number = 0;
    p7sus4: number = 0;
    pIon: number = 0;
    pDor: number = 0;
    pPhr: number = 0;
    pLyd: number = 0;
    pMixo: number = 0;
    pAeo: number = 0;
    pLoc: number = 0;
    otherChords: Map<string, number> = new Map();
}

export class RhythmInput {
    numOfNotes: number = 32;
    unitLength: number = 8;
    allowedLengths: Array<number> = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
}

export class NoteSet {
    pC: number = 0;
    pCis: number = 0;
    pD: number = 0;
    pEs: number = 0;
    pE: number = 0;
    pF: number = 0;
    pFis: number = 0;
    pG: number = 0;
    pGis: number = 0;
    pA: number = 0;
    pB: number = 0;
    pH: number = 0;
}
