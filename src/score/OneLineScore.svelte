<script lang="ts">
    import type { NoteWithAccidental } from './../module/utils';
    import TrebleClef from './TrebleClef.svelte';
    import NoteHeadQuarter from './NoteHeadQuarter.svelte';
    import Natural from './Natural.svelte';
    import Sharp from './Sharp.svelte';
    import Flat from './Flat.svelte';

    export let xLength: number;
    export let yCenter: number;
    export let xLeftEnd: number;
    $: xRightEnd = xLength - xLeftEnd;

    export let notesArray: Array<NoteWithAccidental>;
    $: numOfNotes = notesArray.length;

    const yLineInterval: number = 17.5;
    const lineWidth: number = 1.5;
    const clefWidth: number = yLineInterval * 4;
    const ledgerLineLength: number = yLineInterval * 2.6;
    const accidentalDistance: number = yLineInterval * 1.6;

    $: calcX = (i: number, numOfNotes: number) => {
        let left: number = xLeftEnd + clefWidth * 1.5;
        let unit: number = (xRightEnd - left) / (numOfNotes + 1);
        return left + unit * (i + 1);
    };
</script>

{#each Array(5) as _, i}
    <line
        x1={xLeftEnd}
        y1={yCenter + (i - 2) * yLineInterval}
        x2={xRightEnd}
        y2={yCenter + (i - 2) * yLineInterval}
        stroke="black"
        stroke-width={lineWidth}
    />
{/each}
<TrebleClef cx={xLeftEnd + clefWidth / 2} cy={yCenter} scale={1} />
{#each notesArray as NoteWithAccidental, i}
    <NoteHeadQuarter
        cx={calcX(i, numOfNotes)}
        cy={yCenter - ((NoteWithAccidental.height - 41) * yLineInterval) / 2}
        scale={1}
    />
    {#if NoteWithAccidental.height - 41 >= 6}
        {#each Array(Math.floor((NoteWithAccidental.height - 41 - 4) / 2)) as _, j}
            <line
                x1={calcX(i, numOfNotes) - ledgerLineLength / 2}
                y1={yCenter - (j + 3) * yLineInterval}
                x2={calcX(i, numOfNotes) + ledgerLineLength / 2}
                y2={yCenter - (j + 3) * yLineInterval}
                stroke="black"
                stroke-width={lineWidth}
            />
        {/each}
    {/if}
    {#if NoteWithAccidental.height - 41 <= -6}
        {#each Array(Math.floor((-(NoteWithAccidental.height - 41) - 4) / 2)) as _, j}
            <line
                x1={calcX(i, numOfNotes) - ledgerLineLength / 2}
                y1={yCenter + (j + 3) * yLineInterval}
                x2={calcX(i, numOfNotes) + ledgerLineLength / 2}
                y2={yCenter + (j + 3) * yLineInterval}
                stroke="black"
                stroke-width={lineWidth}
            />
        {/each}
    {/if}
    {#if NoteWithAccidental.accidental === 'natural'}
        <Natural
            cx={calcX(i, numOfNotes) - accidentalDistance}
            cy={yCenter -
                ((NoteWithAccidental.height - 41) * yLineInterval) / 2}
            scale={1}
        />
    {:else if NoteWithAccidental.accidental === 'sharp'}
        <Sharp
            cx={calcX(i, numOfNotes) - accidentalDistance}
            cy={yCenter -
                ((NoteWithAccidental.height - 41) * yLineInterval) / 2}
            scale={1}
        />
    {:else if NoteWithAccidental.accidental === 'flat'}
        <Flat
            cx={calcX(i, numOfNotes) - accidentalDistance}
            cy={yCenter -
                ((NoteWithAccidental.height - 41) * yLineInterval) / 2}
            scale={1}
        />
    {/if}
{/each}
