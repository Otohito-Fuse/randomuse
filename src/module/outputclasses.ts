export class MelodyOutput {
    noteHeights: Array<number> = new Array();
}

export class Chord {
    root: string;
    suffix: string;

    constructor(root: string, suffix: string) {
        this.root = root;
        this.suffix = suffix;
    }
}

export class ChordOutput {
    chords: Array<Chord> = new Array();
}

export class NoteLength {
    denom: number;
    numer: number;

    constructor(denom: number, numer: number) {
        this.denom = denom;
        this.numer = numer;
    }
}

export class RhythmOutput {
    rhythm: Array<NoteLength> = new Array();
}
