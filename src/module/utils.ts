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
