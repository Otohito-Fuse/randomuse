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
} from './outputclasses';

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
    return randomFromMap(m);
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
    return randomFromMap(m);
}

function randomFromMap(m: Map<string, number>): string | undefined {
    let list: Array<[string, number]> = Array.from(m.entries());
    let len: number = list.length;
    for (let i: number = 1; i < len; i++) {
        list[i][1] += list[i - 1][1];
    }
    let sum: number = list[len - 1][1];
    let n: number = (1 - Math.random()) * sum;
    return binarySearch(list, n);
}

export function binarySearch(
    list: Array<[string, number]>,
    n: number,
): string | undefined {
    if (list.length == 0) {
        return undefined;
    }
    if (list.length == 1) {
        return list[0][0];
    }
    let l: number = 0;
    let r: number = list.length - 1;
    if (n <= list[l][1]) {
        return list[l][0];
    }
    if (n > list[r - 1][1]) {
        return list[r][0];
    }
    while (r - l >= 2) {
        let d: number = Math.floor((l + r) / 2);
        if (n <= list[d][1]) {
            r = d;
        } else {
            l = d;
        }
    }
    return list[r][0];
}
