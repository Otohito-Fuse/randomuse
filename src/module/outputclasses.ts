export class MelodyOutput {
    noteHeights: Array<number>;
}

export class Chord {
    root: string;
    suffix: string;
}

export class ChordOutput {
    chords: Array<Chord>;
}

export class NoteLength {
    denom: number;
    numer: number;
}

export class RhythmOutput {
    rhythm: Array<NoteLength>;
}
