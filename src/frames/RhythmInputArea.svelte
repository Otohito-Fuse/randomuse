<script lang="ts">
    import RangeArea from './RangeArea.svelte';

    import { RhythmInput } from '../module/inputclasses';

    export let rhythmInput: RhythmInput = new RhythmInput();

    let numOfNotes: number = 8;

    $: rhythmInput.numOfNotes = numOfNotes;

    let unitLengthLog: number = 3;

    $: rhythmInput.unitLength = Math.pow(2, unitLengthLog);

    function f(unitLengthLog: number): string {
        switch (unitLengthLog) {
            case 0:
                return 'whole';
            case 1:
                return 'half';
            case 2:
                return 'quarter';
            default:
                return Math.pow(2, unitLengthLog).toString() + 'th';
        }
    }

    let p01: number = 100;
    let p02: number = 100;
    let p03: number = 100;
    let p04: number = 100;
    let p05: number = 0;
    let p06: number = 60;
    let p07: number = 0;
    let p08: number = 80;
    let p09: number = 0;
    let p10: number = 0;
    let p11: number = 0;
    let p12: number = 40;
    let p13: number = 0;
    let p14: number = 0;
    let p15: number = 0;
    let p16: number = 20;

    $: pLengthSum =
        p01 +
        p02 +
        p03 +
        p04 +
        p05 +
        p06 +
        p07 +
        p08 +
        p09 +
        p10 +
        p11 +
        p12 +
        p13 +
        p14 +
        p15 +
        p16;

    $: rhythmInput.allowedLengths[0] = p01;
    $: rhythmInput.allowedLengths[1] = p02;
    $: rhythmInput.allowedLengths[2] = p03;
    $: rhythmInput.allowedLengths[3] = p04;
    $: rhythmInput.allowedLengths[4] = p05;
    $: rhythmInput.allowedLengths[5] = p06;
    $: rhythmInput.allowedLengths[6] = p07;
    $: rhythmInput.allowedLengths[7] = p08;
    $: rhythmInput.allowedLengths[8] = p09;
    $: rhythmInput.allowedLengths[9] = p10;
    $: rhythmInput.allowedLengths[10] = p11;
    $: rhythmInput.allowedLengths[11] = p12;
    $: rhythmInput.allowedLengths[12] = p13;
    $: rhythmInput.allowedLengths[13] = p14;
    $: rhythmInput.allowedLengths[14] = p15;
    $: rhythmInput.allowedLengths[15] = p16;

    $: label01 = ((p01 * 100) / pLengthSum).toFixed(1) + '%';
    $: label02 = ((p02 * 100) / pLengthSum).toFixed(1) + '%';
    $: label03 = ((p03 * 100) / pLengthSum).toFixed(1) + '%';
    $: label04 = ((p04 * 100) / pLengthSum).toFixed(1) + '%';
    $: label05 = ((p05 * 100) / pLengthSum).toFixed(1) + '%';
    $: label06 = ((p06 * 100) / pLengthSum).toFixed(1) + '%';
    $: label07 = ((p07 * 100) / pLengthSum).toFixed(1) + '%';
    $: label08 = ((p08 * 100) / pLengthSum).toFixed(1) + '%';
    $: label09 = ((p09 * 100) / pLengthSum).toFixed(1) + '%';
    $: label10 = ((p10 * 100) / pLengthSum).toFixed(1) + '%';
    $: label11 = ((p11 * 100) / pLengthSum).toFixed(1) + '%';
    $: label12 = ((p12 * 100) / pLengthSum).toFixed(1) + '%';
    $: label13 = ((p13 * 100) / pLengthSum).toFixed(1) + '%';
    $: label14 = ((p14 * 100) / pLengthSum).toFixed(1) + '%';
    $: label15 = ((p15 * 100) / pLengthSum).toFixed(1) + '%';
    $: label16 = ((p16 * 100) / pLengthSum).toFixed(1) + '%';
</script>

<div class="main-area">
    <div class="h2-wrapper">
        <h2>Number of Notes</h2>
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={numOfNotes}
            min={1}
            max={20}
            label1=""
            label2={numOfNotes.toString()}
        />
    </div>
    <div class="h2-wrapper">
        <h2>Unit Length</h2>
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={unitLengthLog}
            min={0}
            max={4}
            label1=""
            label2={f(unitLengthLog)}
        />
    </div>
    <div class="h2-wrapper">
        <h2>Frequency</h2>
    </div>
    <div class="h3-wrapper">
        <h3>Length</h3>
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p01}
            min={0}
            max={100}
            label1="x1"
            label2={label01}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p02}
            min={0}
            max={100}
            label1="x2"
            label2={label02}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p03}
            min={0}
            max={100}
            label1="x3"
            label2={label03}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p04}
            min={0}
            max={100}
            label1="x4"
            label2={label04}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p05}
            min={0}
            max={100}
            label1="x5"
            label2={label05}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p06}
            min={0}
            max={100}
            label1="x6"
            label2={label06}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p07}
            min={0}
            max={100}
            label1="x7"
            label2={label07}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p08}
            min={0}
            max={100}
            label1="x8"
            label2={label08}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p09}
            min={0}
            max={100}
            label1="x9"
            label2={label09}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p10}
            min={0}
            max={100}
            label1="x10"
            label2={label10}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p11}
            min={0}
            max={100}
            label1="x11"
            label2={label11}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p12}
            min={0}
            max={100}
            label1="x12"
            label2={label12}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p13}
            min={0}
            max={100}
            label1="x13"
            label2={label13}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p14}
            min={0}
            max={100}
            label1="x14"
            label2={label14}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p15}
            min={0}
            max={100}
            label1="x15"
            label2={label15}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p16}
            min={0}
            max={100}
            label1="x16"
            label2={label16}
        />
    </div>
</div>

<style>
    .main-area {
        max-width: 500px;
        margin: 0 auto;
    }

    .h2-wrapper {
        width: 100%;
        display: block;
        padding-top: 15px;
        padding-left: 20px;
        padding-bottom: 15px;
    }

    .h3-wrapper {
        width: 100%;
        display: block;
        padding-top: 6px;
        padding-left: 25px;
        padding-bottom: 10px;
    }

    .range-wrapper {
        max-width: 400px;
        margin: 0 auto;
    }
</style>
