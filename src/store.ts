import { writable } from 'svelte/store';
import {
    ChordOutput,
    MelodyOutput,
    RhythmOutput,
} from './module/outputclasses';

export const chordOutput1 = writable(new ChordOutput());
export const chordOutput2 = writable(new ChordOutput());
export const chordOutput3 = writable(new ChordOutput());

export const melodyOutput1 = writable(new MelodyOutput());
export const melodyOutput2 = writable(new MelodyOutput());
export const melodyOutput3 = writable(new MelodyOutput());

export const rhythmOutput1 = writable(new RhythmOutput());
export const rhythmOutput2 = writable(new RhythmOutput());
export const rhythmOutput3 = writable(new RhythmOutput());

export const chordOutput1Exists = writable(false);
export const chordOutput2Exists = writable(false);
export const chordOutput3Exists = writable(false);

export const melodyOutput1Exists = writable(false);
export const melodyOutput2Exists = writable(false);
export const melodyOutput3Exists = writable(false);

export const rhythmOutput1Exists = writable(false);
export const rhythmOutput2Exists = writable(false);
export const rhythmOutput3Exists = writable(false);
