<script lang="ts">
    import RangeArea from './RangeArea.svelte';

    import { MelodyInput } from '../module/inputclasses';
    import { noteHeightToPitchName } from '../module/utils';

    export let melodyInput: MelodyInput = new MelodyInput();

    let numOfNotes: number = 32;

    $: melodyInput.numOfNotes = numOfNotes;

    let bottom: number = 60;
    let top: number = 84;

    $: melodyInput.bottom = bottom;
    $: melodyInput.top = top;

    let pC: number = 100;
    let pCis: number = 0;
    let pD: number = 100;
    let pEs: number = 0;
    let pE: number = 100;
    let pF: number = 100;
    let pFis: number = 0;
    let pG: number = 100;
    let pGis: number = 0;
    let pA: number = 100;
    let pB: number = 0;
    let pH: number = 100;

    $: pRootSum =
        pC + pCis + pD + pEs + pE + pF + pFis + pG + pGis + pA + pB + pH;

    $: melodyInput.noteSet.pC = pC;
    $: melodyInput.noteSet.pCis = pCis;
    $: melodyInput.noteSet.pD = pD;
    $: melodyInput.noteSet.pEs = pEs;
    $: melodyInput.noteSet.pE = pE;
    $: melodyInput.noteSet.pF = pF;
    $: melodyInput.noteSet.pFis = pFis;
    $: melodyInput.noteSet.pG = pG;
    $: melodyInput.noteSet.pGis = pGis;
    $: melodyInput.noteSet.pA = pA;
    $: melodyInput.noteSet.pB = pB;
    $: melodyInput.noteSet.pH = pH;

    $: labelC = ((pC * 100) / pRootSum).toFixed(1) + '%';
    $: labelCis = ((pCis * 100) / pRootSum).toFixed(1) + '%';
    $: labelD = ((pD * 100) / pRootSum).toFixed(1) + '%';
    $: labelEs = ((pEs * 100) / pRootSum).toFixed(1) + '%';
    $: labelE = ((pE * 100) / pRootSum).toFixed(1) + '%';
    $: labelF = ((pF * 100) / pRootSum).toFixed(1) + '%';
    $: labelFis = ((pFis * 100) / pRootSum).toFixed(1) + '%';
    $: labelG = ((pG * 100) / pRootSum).toFixed(1) + '%';
    $: labelGis = ((pGis * 100) / pRootSum).toFixed(1) + '%';
    $: labelA = ((pA * 100) / pRootSum).toFixed(1) + '%';
    $: labelB = ((pB * 100) / pRootSum).toFixed(1) + '%';
    $: labelH = ((pH * 100) / pRootSum).toFixed(1) + '%';
</script>

<div class="main-area">
    <div class="h2-wrapper">
        <h2>Number of Notes</h2>
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={numOfNotes}
            min={1}
            max={64}
            label1=""
            label2={numOfNotes.toString()}
        />
    </div>
    <div class="h2-wrapper">
        <h2>Range</h2>
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={bottom}
            min={21}
            max={108}
            label1="bottom"
            label2={noteHeightToPitchName(bottom)}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={top}
            min={21}
            max={108}
            label1="top"
            label2={noteHeightToPitchName(top)}
        />
    </div>
    <div class="h2-wrapper">
        <h2>Frequency</h2>
    </div>
    <div class="h3-wrapper">
        <h3>Pitch</h3>
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pC}
            min={0}
            max={100}
            label1="C"
            label2={labelC}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pCis}
            min={0}
            max={100}
            label1="C#"
            label2={labelCis}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pD}
            min={0}
            max={100}
            label1="D"
            label2={labelD}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pEs}
            min={0}
            max={100}
            label1="Eb"
            label2={labelEs}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pE}
            min={0}
            max={100}
            label1="E"
            label2={labelE}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pF}
            min={0}
            max={100}
            label1="F"
            label2={labelF}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pFis}
            min={0}
            max={100}
            label1="F#"
            label2={labelFis}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pG}
            min={0}
            max={100}
            label1="G"
            label2={labelG}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pGis}
            min={0}
            max={100}
            label1="G#"
            label2={labelGis}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pA}
            min={0}
            max={100}
            label1="A"
            label2={labelA}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pB}
            min={0}
            max={100}
            label1="Bb"
            label2={labelB}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pH}
            min={0}
            max={100}
            label1="B"
            label2={labelH}
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
