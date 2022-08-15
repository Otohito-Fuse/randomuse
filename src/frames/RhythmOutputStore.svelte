<script lang="ts">
    import {
        rhythmOutput1,
        rhythmOutput2,
        rhythmOutput3,
        rhythmOutput1Exists,
        rhythmOutput2Exists,
        rhythmOutput3Exists,
    } from '../store';
    import type { RhythmOutput } from '../module/outputclasses';
    import RhythmOutputArea from './RhythmOutputArea.svelte';
    import TextToClick from '../components/TextToClick.svelte';

    export let rhythmOutput: RhythmOutput;

    let displayingRhythmOutput1: boolean = true;
    let displayingRhythmOutput2: boolean = true;
    let displayingRhythmOutput3: boolean = true;

    function storeRhythmOutput1() {
        rhythmOutput1.set(rhythmOutput);
        rhythmOutput1Exists.set(true);
    }

    function storeRhythmOutput2() {
        rhythmOutput2.set(rhythmOutput);
        rhythmOutput2Exists.set(true);
    }

    function storeRhythmOutput3() {
        rhythmOutput3.set(rhythmOutput);
        rhythmOutput3Exists.set(true);
    }
</script>

<div class="main-area">
    <div class="h2-wrapper">
        <h2>Rhythm Output 1</h2>
        {#if $rhythmOutput1Exists}
            <TextToClick on:clickText={storeRhythmOutput1} label="overwrite" />
        {:else}
            <TextToClick on:clickText={storeRhythmOutput1} label="save" />
        {/if}
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
        {#if $rhythmOutput2Exists}
            <TextToClick on:clickText={storeRhythmOutput2} label="overwrite" />
        {:else}
            <TextToClick on:clickText={storeRhythmOutput2} label="save" />
        {/if}
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
        {#if $rhythmOutput3Exists}
            <TextToClick on:clickText={storeRhythmOutput3} label="overwrite" />
        {:else}
            <TextToClick on:clickText={storeRhythmOutput3} label="save" />
        {/if}
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
