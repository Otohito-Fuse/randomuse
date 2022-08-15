import { MelodyOutput, NoteLength, RhythmOutput, Chord } from './outputclasses';
import {
    binarySearch,
    noteHeightToPitchName,
    noteSymbolEnToDe,
    noteSymbolDeToEn,
    noteHeightTransformation,
    NoteWithAccidental,
    gcd,
    lcm,
    getUnit,
    rhythmTransformation,
    transposeMelody,
    reverseMelody,
    invertMelody,
    transposeChord,
} from './utils';

test('binarySearch1', () => {
    let list: Array<[string, number]> = [
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
    ];
    expect(binarySearch(list, 2.5)).toBe('c');
});

test('binarySearch2', () => {
    let list: Array<[string, number]> = [
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
    ];
    expect(binarySearch(list, 3)).toBe('c');
});

test('binarySearch3', () => {
    let list: Array<[string, number]> = [
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
    ];
    expect(binarySearch(list, 0)).toBe('a');
});

test('binarySearch4', () => {
    let list: Array<[string, number]> = [
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
    ];
    expect(binarySearch(list, 4.0001)).toBe('e');
});

test('binarySearch5', () => {
    let list: Array<[string, number]> = [
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
    ];
    expect(binarySearch(list, 5)).toBe('e');
});

test('binarySearch6', () => {
    let list: Array<[string, number]> = [];
    expect(binarySearch(list, 5)).toBe(undefined);
});

test('noteHeightToPitchName1', () => {
    expect(noteHeightToPitchName(60)).toBe('C4');
});

test('noteHeightToPitchName2', () => {
    expect(noteHeightToPitchName(61)).toBe('C#4');
});

test('noteHeightToPitchName3', () => {
    expect(noteHeightToPitchName(59)).toBe('B3');
});

test('noteHeightToPitchName4', () => {
    expect(noteHeightToPitchName(0)).toBe('C-1');
});

test('noteSymbolEnToDe1', () => {
    expect(noteSymbolEnToDe.get('F#')).toBe('Fis');
});

test('noteSymbolEnToDe2', () => {
    expect(noteSymbolEnToDe.get('Bb')).toBe('B');
});

test('noteSymbolDeToEn1', () => {
    expect(noteSymbolDeToEn.get('Es')).toBe('Eb');
});

test('noteSymbolDeToEn2', () => {
    expect(noteSymbolDeToEn.get('H')).toBe('B');
});

test('noteHeightTransformation1', () => {
    let melodyOutput: MelodyOutput = new MelodyOutput();
    melodyOutput.noteHeights = [
        60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
    ];
    let array: Array<NoteWithAccidental> = [
        new NoteWithAccidental(35, 'none'),
        new NoteWithAccidental(35, 'sharp'),
        new NoteWithAccidental(36, 'none'),
        new NoteWithAccidental(37, 'flat'),
        new NoteWithAccidental(37, 'natural'),
        new NoteWithAccidental(38, 'none'),
        new NoteWithAccidental(38, 'sharp'),
        new NoteWithAccidental(39, 'none'),
        new NoteWithAccidental(39, 'sharp'),
        new NoteWithAccidental(40, 'none'),
        new NoteWithAccidental(41, 'flat'),
        new NoteWithAccidental(41, 'natural'),
        new NoteWithAccidental(42, 'none'),
    ];
    expect(noteHeightTransformation(melodyOutput)).toEqual(array);
});

test('noteHeightTransformation2', () => {
    let melodyOutput: MelodyOutput = new MelodyOutput();
    melodyOutput.noteHeights = [
        72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
    ];
    let array: Array<NoteWithAccidental> = [
        new NoteWithAccidental(42, 'none'),
        new NoteWithAccidental(41, 'none'),
        new NoteWithAccidental(41, 'flat'),
        new NoteWithAccidental(40, 'none'),
        new NoteWithAccidental(39, 'sharp'),
        new NoteWithAccidental(39, 'natural'),
        new NoteWithAccidental(38, 'sharp'),
        new NoteWithAccidental(38, 'natural'),
        new NoteWithAccidental(37, 'none'),
        new NoteWithAccidental(37, 'flat'),
        new NoteWithAccidental(36, 'none'),
        new NoteWithAccidental(35, 'sharp'),
        new NoteWithAccidental(35, 'natural'),
    ];
    expect(noteHeightTransformation(melodyOutput)).toEqual(array);
});

test('gcd1', () => {
    expect(gcd(0, 1)).toBe(0);
});

test('gcd2', () => {
    expect(gcd(3, 4)).toBe(1);
});

test('gcd3', () => {
    expect(gcd(-10, 10)).toBe(10);
});

test('gcd4', () => {
    expect(gcd(49, 70)).toBe(7);
});

test('gcd5', () => {
    expect(gcd(80, 70)).toBe(10);
});

test('lcm1', () => {
    expect(lcm(0, 1)).toBe(0);
});

test('lcm2', () => {
    expect(lcm(2, 3)).toBe(6);
});

test('lcm3', () => {
    expect(lcm(8, 12)).toBe(24);
});

test('lcm4', () => {
    expect(lcm(-9, 15)).toBe(45);
});

test('getUnit1', () => {
    let rhythmOutput: RhythmOutput = new RhythmOutput();
    let array: Array<NoteLength> = [
        new NoteLength(8, 3),
        new NoteLength(8, 3),
        new NoteLength(4, 3),
        new NoteLength(8, 3),
        new NoteLength(8, 3),
        new NoteLength(16, 3),
        new NoteLength(8, 3),
        new NoteLength(8, 3),
        new NoteLength(8, 3),
        new NoteLength(16, 3),
        new NoteLength(8, 3),
        new NoteLength(8, 3),
        new NoteLength(8, 3),
    ];
    rhythmOutput.rhythm = array;
    expect(getUnit(rhythmOutput)).toBe(16);
});

test('rhythmTransformation1', () => {
    let rhythmOutput: RhythmOutput = new RhythmOutput();
    let array1: Array<NoteLength> = [
        new NoteLength(8, 3),
        new NoteLength(8, 3),
        new NoteLength(4, 3),
        new NoteLength(8, 3),
        new NoteLength(8, 3),
    ];
    rhythmOutput.rhythm = array1;
    let array2: Array<Array<[boolean, number]>> = [
        [
            [true, 3],
            [false, 0],
            [false, 0],
            [true, 3],
            [false, 0],
            [false, 0],
            [true, 6],
            [false, 0],
            [false, 0],
            [false, 0],
            [false, 0],
            [false, 0],
            [true, 3],
            [false, 0],
            [false, 0],
            [true, 3],
            [false, 0],
            [false, 0],
        ],
    ];
    expect(rhythmTransformation(rhythmOutput)).toEqual(array2);
});

test('transposeMelody1', () => {
    let melodyOutput1: MelodyOutput = new MelodyOutput();
    melodyOutput1.noteHeights = [
        72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
    ];
    let melodyOutput2: MelodyOutput = new MelodyOutput();
    melodyOutput2.noteHeights = [
        73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61,
    ];
    expect(transposeMelody(melodyOutput1, 1)).toEqual(melodyOutput2);
});

test('transposeMelody2', () => {
    let melodyOutput1: MelodyOutput = new MelodyOutput();
    melodyOutput1.noteHeights = [
        72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
    ];
    let melodyOutput2: MelodyOutput = new MelodyOutput();
    melodyOutput2.noteHeights = [
        73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61,
    ];
    expect(transposeMelody(melodyOutput2, -1)).toEqual(melodyOutput1);
});

test('reverseMelody1', () => {
    let melodyOutput1: MelodyOutput = new MelodyOutput();
    melodyOutput1.noteHeights = [
        72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
    ];
    let melodyOutput2: MelodyOutput = new MelodyOutput();
    melodyOutput2.noteHeights = [
        60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
    ];
    expect(reverseMelody(melodyOutput1)).toEqual(melodyOutput2);
});

test('invertMelody1', () => {
    let melodyOutput1: MelodyOutput = new MelodyOutput();
    melodyOutput1.noteHeights = [
        72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60,
    ];
    let melodyOutput2: MelodyOutput = new MelodyOutput();
    melodyOutput2.noteHeights = [
        60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
    ];
    expect(invertMelody(melodyOutput1, 66)).toEqual(melodyOutput2);
});

test('transposeChord1', () => {
    let chord0: Chord = new Chord('C', 'sus4');
    let chord1: Chord = new Chord('Cis', 'sus4');
    expect(transposeChord(chord0, 1)).toEqual(chord1);
});

test('transposeChord2', () => {
    let chord0: Chord = new Chord('C', 'sus4');
    let chord1: Chord = new Chord('H', 'sus4');
    expect(transposeChord(chord0, -1)).toEqual(chord1);
});

test('transposeChord3', () => {
    let chord0: Chord = new Chord('C', 'sus4');
    let chord1: Chord = new Chord('Es', 'sus4');
    expect(transposeChord(chord0, 3)).toEqual(chord1);
});
