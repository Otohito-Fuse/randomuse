import { getNoteList } from './generator';

test('getNoteList1', () => {
    let list: Array<number> = [12, 24, 36, 48, 60];
    expect(getNoteList(0, 12, 60)).toStrictEqual(list);
});

test('getNoteList2', () => {
    let list: Array<number> = [];
    expect(getNoteList(5, 66, 68)).toStrictEqual(list);
});

test('getNoteList3', () => {
    let list: Array<number> = [69, 81];
    expect(getNoteList(9, 60, 84)).toStrictEqual(list);
});
