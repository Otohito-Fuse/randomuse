import { MelodyOutput } from './outputclasses';
import { RhythmOutput, Chord, ChordOutput } from './outputclasses';

export function noteHeightToPitchName(noteHeight: number): string {
    let noteSymbol: string = '';
    if (noteHeight % 12 == 0) {
        noteSymbol = 'C';
    } else if (noteHeight % 12 == 1) {
        noteSymbol = 'C#';
    } else if (noteHeight % 12 == 2) {
        noteSymbol = 'D';
    } else if (noteHeight % 12 == 3) {
        noteSymbol = 'Eb';
    } else if (noteHeight % 12 == 4) {
        noteSymbol = 'E';
    } else if (noteHeight % 12 == 5) {
        noteSymbol = 'F';
    } else if (noteHeight % 12 == 6) {
        noteSymbol = 'F#';
    } else if (noteHeight % 12 == 7) {
        noteSymbol = 'G';
    } else if (noteHeight % 12 == 8) {
        noteSymbol = 'G#';
    } else if (noteHeight % 12 == 9) {
        noteSymbol = 'A';
    } else if (noteHeight % 12 == 10) {
        noteSymbol = 'Bb';
    } else if (noteHeight % 12 == 11) {
        noteSymbol = 'B';
    }

    return noteSymbol + (Math.floor(noteHeight / 12) - 1).toString();
}

export function binarySearch<T>(
    list: Array<[T, number]>,
    n: number,
): T | undefined {
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

export const noteSymbolEnToDe: Map<string, string> = new Map<string, string>([
    ['C', 'C'],
    ['C#', 'Cis'],
    ['D', 'D'],
    ['Eb', 'Es'],
    ['E', 'E'],
    ['F', 'F'],
    ['F#', 'Fis'],
    ['G', 'G'],
    ['G#', 'Gis'],
    ['A', 'A'],
    ['Bb', 'B'],
    ['B', 'H'],
]);

export const noteSymbolDeToEn: Map<string, string> = new Map<string, string>([
    ['C', 'C'],
    ['Cis', 'C#'],
    ['D', 'D'],
    ['Es', 'Eb'],
    ['E', 'E'],
    ['F', 'F'],
    ['Fis', 'F#'],
    ['G', 'G'],
    ['Gis', 'G#'],
    ['A', 'A'],
    ['B', 'Bb'],
    ['H', 'B'],
]);

export class NoteWithAccidental {
    height: number;
    accidental: string;

    constructor(height: number, accidental: string) {
        this.height = height;
        this.accidental = accidental;
    }
}

export function noteHeightTransformation(
    melodyOutput: MelodyOutput,
): Array<NoteWithAccidental> {
    let map: Map<number, number> = new Map();
    let array: Array<NoteWithAccidental> = new Array();
    for (let noteHeight of melodyOutput.noteHeights) {
        let n: number = 7 * Math.floor(noteHeight / 12);
        switch (noteHeight % 12) {
            case 0:
                if (map.has(n) && map.get(n) != 0) {
                    array.push(new NoteWithAccidental(n, 'natural'));
                } else {
                    array.push(new NoteWithAccidental(n, 'none'));
                }
                map.set(n, 0);
                break;
            case 1:
                array.push(new NoteWithAccidental(n, 'sharp'));
                map.set(n, 1);
                break;
            case 2:
                n += 1;
                if (map.has(n) && map.get(n) != 0) {
                    array.push(new NoteWithAccidental(n, 'natural'));
                } else {
                    array.push(new NoteWithAccidental(n, 'none'));
                }
                map.set(n, 0);
                break;
            case 3:
                n += 2;
                array.push(new NoteWithAccidental(n, 'flat'));
                map.set(n, -1);
                break;
            case 4:
                n += 2;
                if (map.has(n) && map.get(n) != 0) {
                    array.push(new NoteWithAccidental(n, 'natural'));
                } else {
                    array.push(new NoteWithAccidental(n, 'none'));
                }
                map.set(n, 0);
                break;
            case 5:
                n += 3;
                if (map.has(n) && map.get(n) != 0) {
                    array.push(new NoteWithAccidental(n, 'natural'));
                } else {
                    array.push(new NoteWithAccidental(n, 'none'));
                }
                map.set(n, 0);
                break;
            case 6:
                n += 3;
                array.push(new NoteWithAccidental(n, 'sharp'));
                map.set(n, 1);
                break;
            case 7:
                n += 4;
                if (map.has(n) && map.get(n) != 0) {
                    array.push(new NoteWithAccidental(n, 'natural'));
                } else {
                    array.push(new NoteWithAccidental(n, 'none'));
                }
                map.set(n, 0);
                break;
            case 8:
                n += 4;
                array.push(new NoteWithAccidental(n, 'sharp'));
                map.set(n, 1);
                break;
            case 9:
                n += 5;
                if (map.has(n) && map.get(n) != 0) {
                    array.push(new NoteWithAccidental(n, 'natural'));
                } else {
                    array.push(new NoteWithAccidental(n, 'none'));
                }
                map.set(n, 0);
                break;
            case 10:
                n += 6;
                array.push(new NoteWithAccidental(n, 'flat'));
                map.set(n, -1);
                break;
            default:
                n += 6;
                if (map.has(n) && map.get(n) != 0) {
                    array.push(new NoteWithAccidental(n, 'natural'));
                } else {
                    array.push(new NoteWithAccidental(n, 'none'));
                }
                map.set(n, 0);
                break;
        }
    }
    return array;
}

export function rhythmTransformation(
    rhythmOutput: RhythmOutput,
): Array<Array<[boolean, number]>> {
    let unit: number = getUnit(rhythmOutput);
    let array: Array<[boolean, number]> = new Array();
    for (let noteLength of rhythmOutput.rhythm) {
        let n: number = noteLength.numer * (unit / noteLength.denom);
        array.push([true, n]);
        for (let _ of Array(n - 1)) {
            array.push([false, 0]);
        }
    }
    let len: number = array.length;
    let m: number = Math.floor((len + unit * 4 - 1) / (unit * 4));
    let output: Array<Array<[boolean, number]>> = new Array();
    for (let i of [...Array(m).keys()]) {
        output.push(array.slice(i * unit * 4, (i + 1) * unit * 4));
    }
    return output;
}

export function getUnit(rhythmOutput: RhythmOutput): number {
    let n: number = 1;
    for (let noteLength of rhythmOutput.rhythm) {
        n = lcm(n, noteLength.denom);
    }
    return n;
}

export function gcd(n: number, m: number): number {
    if (n == 0 || m == 0) {
        return 0;
    }
    let n0: number = n > 0 ? n : -n;
    let m0: number = m > 0 ? m : -m;
    if (n0 > m0) {
        let l0: number = m0;
        m0 = n0;
        n0 = l0;
    }
    while (m0 % n0 != 0) {
        let l0: number = m0 % n0;
        m0 = n0;
        n0 = l0;
    }
    return n0;
}

export function lcm(n: number, m: number): number {
    if (n == 0 || m == 0) {
        return 0;
    }
    let n0: number = n > 0 ? n : -n;
    let m0: number = m > 0 ? m : -m;
    return (n0 * m0) / gcd(n0, m0);
}

export function transposeMelody(
    melodyOutput: MelodyOutput,
    interval: number,
): MelodyOutput {
    let melodyOutput0 = new MelodyOutput();
    melodyOutput0.noteHeights = melodyOutput.noteHeights.map(
        (e) => e + interval,
    );
    return melodyOutput0;
}

export function reverseMelody(melodyOutput: MelodyOutput): MelodyOutput {
    let melodyOutput0 = new MelodyOutput();
    melodyOutput0.noteHeights = melodyOutput.noteHeights.reverse();
    return melodyOutput0;
}

export function invertMelody(
    melodyOutput: MelodyOutput,
    axis: number,
): MelodyOutput {
    let melodyOutput0 = new MelodyOutput();
    melodyOutput0.noteHeights = melodyOutput.noteHeights.map(
        (e) => axis - (e - axis),
    );
    return melodyOutput0;
}

export function transposeRootPlus(root: string): string {
    switch (root) {
        case 'C':
            return 'Cis';
        case 'Cis':
            return 'D';
        case 'D':
            return 'Es';
        case 'Es':
            return 'E';
        case 'E':
            return 'F';
        case 'F':
            return 'Fis';
        case 'Fis':
            return 'G';
        case 'G':
            return 'Gis';
        case 'Gis':
            return 'A';
        case 'A':
            return 'B';
        case 'B':
            return 'H';
        case 'H':
            return 'C';
        default:
            return root;
    }
}

export function transposeRootMinus(root: string): string {
    switch (root) {
        case 'C':
            return 'H';
        case 'Cis':
            return 'C';
        case 'D':
            return 'Cis';
        case 'Es':
            return 'D';
        case 'E':
            return 'Es';
        case 'F':
            return 'E';
        case 'Fis':
            return 'F';
        case 'G':
            return 'Fis';
        case 'Gis':
            return 'G';
        case 'A':
            return 'Gis';
        case 'B':
            return 'A';
        case 'H':
            return 'B';
        default:
            return root;
    }
}

export function transposeChord(chord: Chord, interval: number): Chord {
    if (interval == 0) {
        return chord;
    } else if (interval > 0) {
        let chord0: Chord = chord;
        for (let i: number = 0; i < interval; i++) {
            chord0 = new Chord(transposeRootPlus(chord0.root), chord0.suffix);
        }
        return chord0;
    } else {
        let chord0: Chord = chord;
        for (let i: number = 0; i < 0 - interval; i++) {
            chord0 = new Chord(transposeRootMinus(chord0.root), chord0.suffix);
        }
        return chord0;
    }
}

export function transposeChords(
    chordOutput: ChordOutput,
    interval: number,
): ChordOutput {
    let chordOutput0 = new ChordOutput();
    chordOutput0.chords = chordOutput.chords.map((e) =>
        transposeChord(e, interval),
    );
    return chordOutput0;
}
