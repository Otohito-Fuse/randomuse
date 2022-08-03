export class MelodyOutput {
    noteHeights: Array<number> = new Array();
}

export class Chord {
    root: string;
    suffix: string;
}

export class ChordOutput {
    chords: Array<Chord> = new Array();
}

export class NoteLength {
    denom: number;
    numer: number;
}

export class RhythmOutput {
    rhythm: Array<NoteLength> = new Array();
}
