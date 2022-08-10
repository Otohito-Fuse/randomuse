<script lang="ts">
    import {
        chordOutput1,
        chordOutput2,
        chordOutput3,
        chordOutput1Exists,
        chordOutput2Exists,
        chordOutput3Exists,
    } from '../store';
    import type { ChordOutput } from '../module/outputclasses';
    import ChordOutputArea from './ChordOutputArea.svelte';
    import TextToClick from '../components/TextToClick.svelte';

    export let chordOutput: ChordOutput;

    let displayingChordOutput1: boolean = true;
    let displayingChordOutput2: boolean = true;
    let displayingChordOutput3: boolean = true;

    function storeChordOutput1() {
        chordOutput1.set(chordOutput);
        chordOutput1Exists.set(true);
    }

    function storeChordOutput2() {
        chordOutput2.set(chordOutput);
        chordOutput2Exists.set(true);
    }

    function storeChordOutput3() {
        chordOutput3.set(chordOutput);
        chordOutput3Exists.set(true);
    }
</script>

<div class="main-area">
    <div class="h2-wrapper">
        <h2>Chord Output 1</h2>
        {#if $chordOutput1Exists}
            <TextToClick on:clickText={storeChordOutput1} label="Overwrite" />
        {:else}
            <TextToClick on:clickText={storeChordOutput1} label="Save" />
        {/if}
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
        {#if $chordOutput2Exists}
            <TextToClick on:clickText={storeChordOutput2} label="Overwrite" />
        {:else}
            <TextToClick on:clickText={storeChordOutput2} label="Save" />
        {/if}
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
        {#if $chordOutput3Exists}
            <TextToClick on:clickText={storeChordOutput3} label="Overwrite" />
        {:else}
            <TextToClick on:clickText={storeChordOutput3} label="Save" />
        {/if}
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
</div>

<style>
    .main-area {
        max-width: 800px;
        margin: 0 auto;
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
