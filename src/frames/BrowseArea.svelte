<script lang="ts">
    import {
        chordOutput1,
        chordOutput2,
        chordOutput3,
        melodyOutput1,
        melodyOutput2,
        melodyOutput3,
        rhythmOutput1,
        rhythmOutput2,
        rhythmOutput3,
    } from '../store';
    import ChordOutputArea from './ChordOutputArea.svelte';
    import MelodyOutputArea from './MelodyOutputArea.svelte';
    import RhythmOutputArea from './RhythmOutputArea.svelte';
    import TextToClick from '../components/TextToClick.svelte';
    import {
        transposeMelody,
        reverseMelody,
        invertMelody,
    } from '../module/utils';

    let displayingChordOutput1: boolean = true;
    let displayingChordOutput2: boolean = true;
    let displayingChordOutput3: boolean = true;

    let displayingMelodyOutput1: boolean = true;
    let displayingMelodyOutput2: boolean = true;
    let displayingMelodyOutput3: boolean = true;

    let displayingRhythmOutput1: boolean = true;
    let displayingRhythmOutput2: boolean = true;
    let displayingRhythmOutput3: boolean = true;

    function transposePlus1() {
        melodyOutput1.set(transposeMelody($melodyOutput1, 1));
    }

    function transposeMinus1() {
        melodyOutput1.set(transposeMelody($melodyOutput1, -1));
    }

    function reverse1() {
        melodyOutput1.set(reverseMelody($melodyOutput1));
    }

    function invert1() {
        melodyOutput1.set(invertMelody($melodyOutput1, 72));
    }

    function transposePlus2() {
        melodyOutput2.set(transposeMelody($melodyOutput2, 1));
    }

    function transposeMinus2() {
        melodyOutput2.set(transposeMelody($melodyOutput2, -1));
    }

    function reverse2() {
        melodyOutput2.set(reverseMelody($melodyOutput2));
    }

    function invert2() {
        melodyOutput2.set(invertMelody($melodyOutput2, 72));
    }

    function transposePlus3() {
        melodyOutput3.set(transposeMelody($melodyOutput3, 1));
    }

    function transposeMinus3() {
        melodyOutput3.set(transposeMelody($melodyOutput3, -1));
    }

    function reverse3() {
        melodyOutput3.set(reverseMelody($melodyOutput3));
    }

    function invert3() {
        melodyOutput3.set(invertMelody($melodyOutput3, 72));
    }
</script>

<div class="main-area">
    <div class="h2-wrapper">
        <h2>Chord Output 1</h2>
        {#if displayingChordOutput1}
            <TextToClick
                on:clickText={() => {
                    displayingChordOutput1 = false;
                }}
                label="hide"
            />
        {:else}
            <TextToClick
                on:clickText={() => {
                    displayingChordOutput1 = true;
                }}
                label="show"
            />
        {/if}
    </div>
    {#if displayingChordOutput1}
        <ChordOutputArea bind:chordOutput={$chordOutput1} />
    {/if}
    <div class="h2-wrapper">
        <h2>Chord Output 2</h2>
        {#if displayingChordOutput2}
            <TextToClick
                on:clickText={() => {
                    displayingChordOutput2 = false;
                }}
                label="hide"
            />
        {:else}
            <TextToClick
                on:clickText={() => {
                    displayingChordOutput2 = true;
                }}
                label="show"
            />
        {/if}
    </div>
    {#if displayingChordOutput2}
        <ChordOutputArea bind:chordOutput={$chordOutput2} />
    {/if}
    <div class="h2-wrapper">
        <h2>Chord Output 3</h2>
        {#if displayingChordOutput3}
            <TextToClick
                on:clickText={() => {
                    displayingChordOutput3 = false;
                }}
                label="hide"
            />
        {:else}
            <TextToClick
                on:clickText={() => {
                    displayingChordOutput3 = true;
                }}
                label="show"
            />
        {/if}
    </div>
    {#if displayingChordOutput3}
        <ChordOutputArea bind:chordOutput={$chordOutput3} />
    {/if}
    <div class="h2-wrapper">
        <h2>Melody Output 1</h2>
        {#if displayingMelodyOutput1}
            <TextToClick
                on:clickText={() => {
                    displayingMelodyOutput1 = false;
                }}
                label="hide"
            />
        {:else}
            <TextToClick
                on:clickText={() => {
                    displayingMelodyOutput1 = true;
                }}
                label="show"
            />
        {/if}
        <TextToClick on:clickText={transposePlus1} label="+1" />
        <TextToClick on:clickText={transposeMinus1} label="-1" />
        <TextToClick on:clickText={reverse1} label="reverse" />
        <TextToClick on:clickText={invert1} label="invert" />
    </div>
    {#if displayingMelodyOutput1}
        <MelodyOutputArea bind:melodyOutput={$melodyOutput1} />
    {/if}
    <div class="h2-wrapper">
        <h2>Melody Output 2</h2>
        {#if displayingMelodyOutput2}
            <TextToClick
                on:clickText={() => {
                    displayingMelodyOutput2 = false;
                }}
                label="hide"
            />
        {:else}
            <TextToClick
                on:clickText={() => {
                    displayingMelodyOutput2 = true;
                }}
                label="show"
            />
        {/if}
        <TextToClick on:clickText={transposePlus2} label="+1" />
        <TextToClick on:clickText={transposeMinus2} label="-1" />
        <TextToClick on:clickText={reverse2} label="reverse" />
        <TextToClick on:clickText={invert2} label="invert" />
    </div>
    {#if displayingMelodyOutput2}
        <MelodyOutputArea bind:melodyOutput={$melodyOutput2} />
    {/if}
    <div class="h2-wrapper">
        <h2>Melody Output 3</h2>
        {#if displayingMelodyOutput3}
            <TextToClick
                on:clickText={() => {
                    displayingMelodyOutput3 = false;
                }}
                label="hide"
            />
        {:else}
            <TextToClick
                on:clickText={() => {
                    displayingMelodyOutput3 = true;
                }}
                label="show"
            />
        {/if}
        <TextToClick on:clickText={transposePlus3} label="+1" />
        <TextToClick on:clickText={transposeMinus3} label="-1" />
        <TextToClick on:clickText={reverse3} label="reverse" />
        <TextToClick on:clickText={invert3} label="invert" />
    </div>
    {#if displayingMelodyOutput3}
        <MelodyOutputArea bind:melodyOutput={$melodyOutput3} />
    {/if}
    <div class="h2-wrapper">
        <h2>Rhythm Output 1</h2>
        {#if displayingRhythmOutput1}
            <TextToClick
                on:clickText={() => {
                    displayingRhythmOutput1 = false;
                }}
                label="hide"
            />
        {:else}
            <TextToClick
                on:clickText={() => {
                    displayingRhythmOutput1 = true;
                }}
                label="show"
            />
        {/if}
    </div>
    {#if displayingRhythmOutput1}
        <RhythmOutputArea bind:rhythmOutput={$rhythmOutput1} />
    {/if}
    <div class="h2-wrapper">
        <h2>Rhythm Output 2</h2>
        {#if displayingRhythmOutput2}
            <TextToClick
                on:clickText={() => {
                    displayingRhythmOutput2 = false;
                }}
                label="hide"
            />
        {:else}
            <TextToClick
                on:clickText={() => {
                    displayingRhythmOutput2 = true;
                }}
                label="show"
            />
        {/if}
    </div>
    {#if displayingRhythmOutput2}
        <RhythmOutputArea bind:rhythmOutput={$rhythmOutput2} />
    {/if}
    <div class="h2-wrapper">
        <h2>Rhythm Output 3</h2>
        {#if displayingRhythmOutput3}
            <TextToClick
                on:clickText={() => {
                    displayingRhythmOutput3 = false;
                }}
                label="hide"
            />
        {:else}
            <TextToClick
                on:clickText={() => {
                    displayingRhythmOutput3 = true;
                }}
                label="show"
            />
        {/if}
    </div>
    {#if displayingRhythmOutput3}
        <RhythmOutputArea bind:rhythmOutput={$rhythmOutput3} />
    {/if}
</div>

<style>
    .main-area {
        max-width: 800px;
        margin: 0 auto;
        padding-top: 30px;
    }

    h2 {
        padding-right: 20px;
    }

    .h2-wrapper {
        width: 100%;
        display: flex;
        padding-top: 10px;
        padding-left: 20px;
        padding-bottom: 0px;
    }
</style>
