<script lang="ts">
    import {
        melodyOutput1,
        melodyOutput2,
        melodyOutput3,
        melodyOutput1Exists,
        melodyOutput2Exists,
        melodyOutput3Exists,
    } from '../store';
    import type { MelodyOutput } from '../module/outputclasses';
    import MelodyOutputArea from './MelodyOutputArea.svelte';
    import TextToClick from '../components/TextToClick.svelte';
    import {
        transposeMelody,
        reverseMelody,
        invertMelody,
    } from '../module/utils';

    export let melodyOutput: MelodyOutput;

    let displayingMelodyOutput1: boolean = true;
    let displayingMelodyOutput2: boolean = true;
    let displayingMelodyOutput3: boolean = true;

    function storeMelodyOutput1() {
        melodyOutput1.set(melodyOutput);
        melodyOutput1Exists.set(true);
    }

    function storeMelodyOutput2() {
        melodyOutput2.set(melodyOutput);
        melodyOutput2Exists.set(true);
    }

    function storeMelodyOutput3() {
        melodyOutput3.set(melodyOutput);
        melodyOutput3Exists.set(true);
    }

    function transpose1(n: number) {
        melodyOutput1.set(transposeMelody($melodyOutput1, n));
    }

    function reverse1() {
        melodyOutput1.set(reverseMelody($melodyOutput1));
    }

    function invert1() {
        melodyOutput1.set(invertMelody($melodyOutput1, 72));
    }

    function transpose2(n: number) {
        melodyOutput2.set(transposeMelody($melodyOutput2, n));
    }

    function reverse2() {
        melodyOutput2.set(reverseMelody($melodyOutput2));
    }

    function invert2() {
        melodyOutput2.set(invertMelody($melodyOutput2, 72));
    }

    function transpose3(n: number) {
        melodyOutput3.set(transposeMelody($melodyOutput3, n));
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
        <h2>Melody Output 1</h2>
        {#if $melodyOutput1Exists}
            <TextToClick on:clickText={storeMelodyOutput1} label="overwrite" />
        {:else}
            <TextToClick on:clickText={storeMelodyOutput1} label="save" />
        {/if}
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
        <TextToClick
            on:clickText={() => {
                transpose1(1);
            }}
            label="+1"
        />
        <TextToClick
            on:clickText={() => {
                transpose1(-1);
            }}
            label="-1"
        />
        <TextToClick on:clickText={reverse1} label="reverse" />
        <TextToClick on:clickText={invert1} label="invert" />
    </div>
    {#if displayingMelodyOutput1}
        <MelodyOutputArea bind:melodyOutput={$melodyOutput1} />
    {/if}
    <div class="h2-wrapper">
        <h2>Melody Output 2</h2>
        {#if $melodyOutput2Exists}
            <TextToClick on:clickText={storeMelodyOutput2} label="overwrite" />
        {:else}
            <TextToClick on:clickText={storeMelodyOutput2} label="save" />
        {/if}
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
        <TextToClick
            on:clickText={() => {
                transpose2(1);
            }}
            label="+1"
        />
        <TextToClick
            on:clickText={() => {
                transpose2(-1);
            }}
            label="-1"
        />
        <TextToClick on:clickText={reverse2} label="reverse" />
        <TextToClick on:clickText={invert2} label="invert" />
    </div>
    {#if displayingMelodyOutput2}
        <MelodyOutputArea bind:melodyOutput={$melodyOutput2} />
    {/if}
    <div class="h2-wrapper">
        <h2>Melody Output 3</h2>
        {#if $melodyOutput3Exists}
            <TextToClick on:clickText={storeMelodyOutput3} label="overwrite" />
        {:else}
            <TextToClick on:clickText={storeMelodyOutput3} label="save" />
        {/if}
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
        <TextToClick
            on:clickText={() => {
                transpose3(1);
            }}
            label="+1"
        />
        <TextToClick
            on:clickText={() => {
                transpose3(-1);
            }}
            label="-1"
        />
        <TextToClick on:clickText={reverse3} label="reverse" />
        <TextToClick on:clickText={invert3} label="invert" />
    </div>
    {#if displayingMelodyOutput3}
        <MelodyOutputArea bind:melodyOutput={$melodyOutput3} />
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
        flex-wrap: wrap;
        padding-top: 10px;
        padding-left: 20px;
        padding-bottom: 0px;
    }
</style>
