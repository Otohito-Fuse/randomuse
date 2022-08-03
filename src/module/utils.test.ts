import {
    binarySearch,
    noteHeightToPitchName,
    noteSymbolEnToDe,
    noteSymbolDeToEn,
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
