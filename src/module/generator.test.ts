import { binarySearch } from './generator';

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
