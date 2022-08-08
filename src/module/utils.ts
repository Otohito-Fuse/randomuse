import type { MelodyOutput } from './outputclasses';

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
