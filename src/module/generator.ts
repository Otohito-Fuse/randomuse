import type {
    ChordInput,
    MelodyInput,
    RhythmInput,
    NoteSet,
} from './inputclasses';
import type {
    Chord,
    ChordOutput,
    MelodyOutput,
    RhythmOutput,
    NoteLength,
} from './outputclasses';
import { binarySearch } from './utils';

export function generateRhythm(input: RhythmInput): RhythmOutput {
    let list: Array<NoteLength> = new Array();
    for (let i: number = 0; i < input.numOfNotes; i++) {
        list.push(generateNoteLength(input));
    }
    let output: RhythmOutput = {
        rhythm: list,
    };
    return output;
}

function generateNoteLength(input: RhythmInput): NoteLength {
    let len: number = input.allowedLengths.length;
    let m: Map<number, number> = new Map();
    for (let i: number = 0; i < len; i++) {
        m.set(i + 1, input.allowedLengths[i]);
    }
    let output: NoteLength = {
        denom: input.unitLength,
        numer: randomFromMap(m),
    };
    return output;
}

export function generateMelody(input: MelodyInput): MelodyOutput {
    let list: Array<number> = new Array();
    for (let i: number = 0; i < input.numOfNotes; i++) {
        list.push(generateNoteHeight(input));
    }
    let output: MelodyOutput = {
        noteHeights: list,
    };
    return output;
}

function generateNoteHeight(input: MelodyInput): number {
    let noteSet: NoteSet = input.noteSet;
    let bottom: number = input.bottom;
    let top: number = input.top;
    let m: Map<number, number> = new Map();
    if (noteSet.pC > 0) {
        let noteList: Array<number> = getNoteList(0, bottom, top);
        let len: number = noteList.length;
        if (len > 0) {
            for (let n of noteList) {
                m.set(n, noteSet.pC / len);
            }
        }
    }
    if (noteSet.pCis > 0) {
        let noteList: Array<number> = getNoteList(1, bottom, top);
        let len: number = noteList.length;
        if (len > 0) {
            for (let n of noteList) {
                m.set(n, noteSet.pCis / len);
            }
        }
    }
    if (noteSet.pD > 0) {
        let noteList: Array<number> = getNoteList(2, bottom, top);
        let len: number = noteList.length;
        if (len > 0) {
            for (let n of noteList) {
                m.set(n, noteSet.pD / len);
            }
        }
    }
    if (noteSet.pEs > 0) {
        let noteList: Array<number> = getNoteList(3, bottom, top);
        let len: number = noteList.length;
        if (len > 0) {
            for (let n of noteList) {
                m.set(n, noteSet.pEs / len);
            }
        }
    }
    if (noteSet.pE > 0) {
        let noteList: Array<number> = getNoteList(4, bottom, top);
        let len: number = noteList.length;
        if (len > 0) {
            for (let n of noteList) {
                m.set(n, noteSet.pE / len);
            }
        }
    }
    if (noteSet.pF > 0) {
        let noteList: Array<number> = getNoteList(5, bottom, top);
        let len: number = noteList.length;
        if (len > 0) {
            for (let n of noteList) {
                m.set(n, noteSet.pF / len);
            }
        }
    }
    if (noteSet.pFis > 0) {
        let noteList: Array<number> = getNoteList(6, bottom, top);
        let len: number = noteList.length;
        if (len > 0) {
            for (let n of noteList) {
                m.set(n, noteSet.pFis / len);
            }
        }
    }
    if (noteSet.pG > 0) {
        let noteList: Array<number> = getNoteList(7, bottom, top);
        let len: number = noteList.length;
        if (len > 0) {
            for (let n of noteList) {
                m.set(n, noteSet.pG / len);
            }
        }
    }
    if (noteSet.pGis > 0) {
        let noteList: Array<number> = getNoteList(8, bottom, top);
        let len: number = noteList.length;
        if (len > 0) {
            for (let n of noteList) {
                m.set(n, noteSet.pGis / len);
            }
        }
    }
    if (noteSet.pA > 0) {
        let noteList: Array<number> = getNoteList(9, bottom, top);
        let len: number = noteList.length;
        if (len > 0) {
            for (let n of noteList) {
                m.set(n, noteSet.pA / len);
            }
        }
    }
    if (noteSet.pB > 0) {
        let noteList: Array<number> = getNoteList(10, bottom, top);
        let len: number = noteList.length;
        if (len > 0) {
            for (let n of noteList) {
                m.set(n, noteSet.pB / len);
            }
        }
    }
    if (noteSet.pH > 0) {
        let noteList: Array<number> = getNoteList(11, bottom, top);
        let len: number = noteList.length;
        if (len > 0) {
            for (let n of noteList) {
                m.set(n, noteSet.pH / len);
            }
        }
    }
    return randomFromMap<number>(m);
}

export function getNoteList(
    interval: number,
    bottom: number,
    top: number,
): Array<number> {
    return Array.from(Array(top + 1))
        .map((_, i) => i)
        .filter((e) => e >= bottom)
        .filter((e) => e % 12 == interval);
}

export function generateChords(input: ChordInput): ChordOutput {
    let list: Array<Chord> = new Array();
    for (let i: number = 0; i < input.numOfChords; i++) {
        list.push(generateChord(input));
    }
    let output: ChordOutput = {
        chords: list,
    };
    return output;
}

function generateChord(input: ChordInput): Chord {
    let c: Chord = {
        root: generateNote(input.noteSet) ?? '',
        suffix: generateSuffix(input) ?? '',
    };
    return c;
}

function generateSuffix(input: ChordInput): string | undefined {
    let m: Map<string, number> = new Map();
    for (const [key, value] of input.otherChords) {
        if (value > 0) {
            m.set(key, value);
        }
    }
    if (input.pM > 0) {
        m.set('M', (m.get('M') ?? 0) + input.pM);
    }
    if (input.pm > 0) {
        m.set('m', (m.get('m') ?? 0) + input.pm);
    }
    if (input.p7 > 0) {
        m.set('7', (m.get('7') ?? 0) + input.p7);
    }
    if (input.pM7 > 0) {
        m.set('M7', (m.get('M7') ?? 0) + input.pM7);
    }
    if (input.pm7 > 0) {
        m.set('m7', (m.get('m7') ?? 0) + input.pm7);
    }
    if (input.pm7b5 > 0) {
        m.set('m7b5', (m.get('m7b5') ?? 0) + input.pm7b5);
    }
    if (input.pdim > 0) {
        m.set('dim', (m.get('dim') ?? 0) + input.pdim);
    }
    if (input.paug > 0) {
        m.set('aug', (m.get('aug') ?? 0) + input.paug);
    }
    if (input.p7sus4 > 0) {
        m.set('7sus4', (m.get('7sus4') ?? 0) + input.p7sus4);
    }
    if (input.pIon > 0) {
        m.set('Ion', (m.get('Ion') ?? 0) + input.pIon);
    }
    if (input.pDor > 0) {
        m.set('Dor', (m.get('Dor') ?? 0) + input.pDor);
    }
    if (input.pPhr > 0) {
        m.set('Phr', (m.get('Phr') ?? 0) + input.pPhr);
    }
    if (input.pLyd > 0) {
        m.set('Lyd', (m.get('Lyd') ?? 0) + input.pLyd);
    }
    if (input.pMixo > 0) {
        m.set('Mixo', (m.get('Mixo') ?? 0) + input.pMixo);
    }
    if (input.pAeo > 0) {
        m.set('Aeo', (m.get('Aeo') ?? 0) + input.pAeo);
    }
    if (input.pLoc > 0) {
        m.set('Loc', (m.get('Loc') ?? 0) + input.pLoc);
    }
    return randomFromMap<string>(m);
}

function generateNote(input: NoteSet): string | undefined {
    let m: Map<string, number> = new Map();
    if (input.pC > 0) {
        m.set('C', input.pC);
    }
    if (input.pCis > 0) {
        m.set('Cis', input.pCis);
    }
    if (input.pD > 0) {
        m.set('D', input.pD);
    }
    if (input.pEs > 0) {
        m.set('Es', input.pEs);
    }
    if (input.pE > 0) {
        m.set('E', input.pE);
    }
    if (input.pF > 0) {
        m.set('F', input.pF);
    }
    if (input.pFis > 0) {
        m.set('Fis', input.pFis);
    }
    if (input.pG > 0) {
        m.set('G', input.pG);
    }
    if (input.pGis > 0) {
        m.set('Gis', input.pGis);
    }
    if (input.pA > 0) {
        m.set('A', input.pA);
    }
    if (input.pB > 0) {
        m.set('B', input.pB);
    }
    if (input.pH > 0) {
        m.set('H', input.pH);
    }
    return randomFromMap<string>(m);
}

function randomFromMap<T>(m: Map<T, number>): T | undefined {
    let list: Array<[T, number]> = Array.from(m.entries());
    let len: number = list.length;
    for (let i: number = 1; i < len; i++) {
        list[i][1] += list[i - 1][1];
    }
    let sum: number = list[len - 1][1];
    let n: number = (1 - Math.random()) * sum;
    return binarySearch<T>(list, n);
}
