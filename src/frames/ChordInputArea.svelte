<script lang="ts">
    import RangeArea from './RangeArea.svelte';
    import TextToClick from '../components/TextToClick.svelte';

    import { ChordInput } from '../module/inputclasses';

    export let chordInput: ChordInput = new ChordInput();

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

    $: chordInput.noteSet.pC = pC;
    $: chordInput.noteSet.pCis = pCis;
    $: chordInput.noteSet.pD = pD;
    $: chordInput.noteSet.pEs = pEs;
    $: chordInput.noteSet.pE = pE;
    $: chordInput.noteSet.pF = pF;
    $: chordInput.noteSet.pFis = pFis;
    $: chordInput.noteSet.pG = pG;
    $: chordInput.noteSet.pGis = pGis;
    $: chordInput.noteSet.pA = pA;
    $: chordInput.noteSet.pB = pB;
    $: chordInput.noteSet.pH = pH;

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

    let pM: number = 100;
    let pm: number = 100;
    let p7: number = 100;
    let pM7: number = 100;
    let pm7: number = 100;
    let pm7b5: number = 100;
    let pdim: number = 100;
    let paug: number = 0;
    let p7sus4: number = 0;
    let pIon: number = 0;
    let pDor: number = 0;
    let pPhr: number = 0;
    let pLyd: number = 0;
    let pMixo: number = 0;
    let pAeo: number = 0;
    let pLoc: number = 0;

    $: pSuffixSum =
        pM +
        pm +
        p7 +
        pM7 +
        pm7 +
        pm7b5 +
        pdim +
        paug +
        p7sus4 +
        pIon +
        pDor +
        pPhr +
        pLyd +
        pMixo +
        pAeo +
        pLoc;

    $: chordInput.pM = pM;
    $: chordInput.pm = pm;
    $: chordInput.p7 = p7;
    $: chordInput.pM7 = pM7;
    $: chordInput.pm7 = pm7;
    $: chordInput.pm7b5 = pm7b5;
    $: chordInput.pdim = pdim;
    $: chordInput.paug = paug;
    $: chordInput.p7sus4 = p7sus4;
    $: chordInput.pIon = pIon;
    $: chordInput.pDor = pDor;
    $: chordInput.pPhr = pPhr;
    $: chordInput.pLyd = pLyd;
    $: chordInput.pMixo = pMixo;
    $: chordInput.pAeo = pAeo;
    $: chordInput.pLoc = pLoc;

    $: labelM = ((pM * 100) / pSuffixSum).toFixed(1) + '%';
    $: labelm = ((pm * 100) / pSuffixSum).toFixed(1) + '%';
    $: label7 = ((p7 * 100) / pSuffixSum).toFixed(1) + '%';
    $: labelM7 = ((pM7 * 100) / pSuffixSum).toFixed(1) + '%';
    $: labelm7 = ((pm7 * 100) / pSuffixSum).toFixed(1) + '%';
    $: labelm7b5 = ((pm7b5 * 100) / pSuffixSum).toFixed(1) + '%';
    $: labeldim = ((pdim * 100) / pSuffixSum).toFixed(1) + '%';
    $: labelaug = ((paug * 100) / pSuffixSum).toFixed(1) + '%';
    $: label7sus4 = ((p7sus4 * 100) / pSuffixSum).toFixed(1) + '%';
    $: labelIon = ((pIon * 100) / pSuffixSum).toFixed(1) + '%';
    $: labelDor = ((pDor * 100) / pSuffixSum).toFixed(1) + '%';
    $: labelPhr = ((pPhr * 100) / pSuffixSum).toFixed(1) + '%';
    $: labelLyd = ((pLyd * 100) / pSuffixSum).toFixed(1) + '%';
    $: labelMixo = ((pMixo * 100) / pSuffixSum).toFixed(1) + '%';
    $: labelAeo = ((pAeo * 100) / pSuffixSum).toFixed(1) + '%';
    $: labelLoc = ((pLoc * 100) / pSuffixSum).toFixed(1) + '%';

    let numOfChords: number = 16;

    $: chordInput.numOfChords = numOfChords;

    function evenRoot() {
        pC = 100;
        pCis = 100;
        pD = 100;
        pEs = 100;
        pE = 100;
        pF = 100;
        pFis = 100;
        pG = 100;
        pGis = 100;
        pA = 100;
        pB = 100;
        pH = 100;
    }

    function evenSuffix() {
        pM = 100;
        pm = 100;
        p7 = 100;
        pM7 = 100;
        pm7 = 100;
        pm7b5 = 100;
        pdim = 100;
        paug = 100;
        p7sus4 = 100;
        pIon = 100;
        pDor = 100;
        pPhr = 100;
        pLyd = 100;
        pMixo = 100;
        pAeo = 100;
        pLoc = 100;
    }

    function randomRoot() {
        pC = Math.floor(Math.random() * 101);
        pCis = Math.floor(Math.random() * 101);
        pD = Math.floor(Math.random() * 101);
        pEs = Math.floor(Math.random() * 101);
        pE = Math.floor(Math.random() * 101);
        pF = Math.floor(Math.random() * 101);
        pFis = Math.floor(Math.random() * 101);
        pG = Math.floor(Math.random() * 101);
        pGis = Math.floor(Math.random() * 101);
        pA = Math.floor(Math.random() * 101);
        pB = Math.floor(Math.random() * 101);
        pH = Math.floor(Math.random() * 101);
    }

    function randomSuffix() {
        pM = Math.floor(Math.random() * 101);
        pm = Math.floor(Math.random() * 101);
        p7 = Math.floor(Math.random() * 101);
        pM7 = Math.floor(Math.random() * 101);
        pm7 = Math.floor(Math.random() * 101);
        pm7b5 = Math.floor(Math.random() * 101);
        pdim = Math.floor(Math.random() * 101);
        paug = Math.floor(Math.random() * 101);
        p7sus4 = Math.floor(Math.random() * 101);
        pIon = Math.floor(Math.random() * 101);
        pDor = Math.floor(Math.random() * 101);
        pPhr = Math.floor(Math.random() * 101);
        pLyd = Math.floor(Math.random() * 101);
        pMixo = Math.floor(Math.random() * 101);
        pAeo = Math.floor(Math.random() * 101);
        pLoc = Math.floor(Math.random() * 101);
    }
</script>

<div class="main-area">
    <div class="h2-wrapper">
        <h2>Number of Chords</h2>
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={numOfChords}
            min={1}
            max={32}
            label1=""
            label2={numOfChords.toString()}
        />
    </div>
    <div class="h2-wrapper">
        <h2>Frequency</h2>
    </div>
    <div class="h3-wrapper">
        <h3>Root</h3>
        <TextToClick on:clickText={evenRoot} label="even" />
        <TextToClick on:clickText={randomRoot} label="random" />
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
    <div class="h3-wrapper">
        <h3>Suffix</h3>
        <TextToClick on:clickText={evenSuffix} label="even" />
        <TextToClick on:clickText={randomSuffix} label="random" />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pM}
            min={0}
            max={100}
            label1="M"
            label2={labelM}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pm}
            min={0}
            max={100}
            label1="m"
            label2={labelm}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p7}
            min={0}
            max={100}
            label1="7"
            label2={label7}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pM7}
            min={0}
            max={100}
            label1="M7"
            label2={labelM7}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pm7}
            min={0}
            max={100}
            label1="m7"
            label2={labelm7}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pm7b5}
            min={0}
            max={100}
            label1="m7b5"
            label2={labelm7b5}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pdim}
            min={0}
            max={100}
            label1="dim"
            label2={labeldim}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={paug}
            min={0}
            max={100}
            label1="aug"
            label2={labelaug}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={p7sus4}
            min={0}
            max={100}
            label1="7sus4"
            label2={label7sus4}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pIon}
            min={0}
            max={100}
            label1="Ion"
            label2={labelIon}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pDor}
            min={0}
            max={100}
            label1="Dor"
            label2={labelDor}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pPhr}
            min={0}
            max={100}
            label1="Phr"
            label2={labelPhr}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pLyd}
            min={0}
            max={100}
            label1="Lyd"
            label2={labelLyd}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pMixo}
            min={0}
            max={100}
            label1="Mixo"
            label2={labelMixo}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pAeo}
            min={0}
            max={100}
            label1="Aeo"
            label2={labelAeo}
        />
    </div>
    <div class="range-wrapper">
        <RangeArea
            bind:value={pLoc}
            min={0}
            max={100}
            label1="Loc"
            label2={labelLoc}
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
        display: flex;
        flex-wrap: wrap;
        padding-top: 6px;
        padding-left: 25px;
        padding-bottom: 10px;
    }

    .h3-wrapper h3 {
        padding-right: 10px;
        padding-top: 5px;
    }

    .range-wrapper {
        max-width: 400px;
        margin: 0 auto;
    }
</style>
