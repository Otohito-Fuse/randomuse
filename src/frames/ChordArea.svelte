<script lang="ts">
    import ChordInputArea from './ChordInputArea.svelte';
    import ChordOutputArea from './ChordOutputArea.svelte';
    import ChordOutputStore from './ChordOutputStore.svelte';
    import Button from '../components/Button.svelte';
    import TextToClick from '../components/TextToClick.svelte';

    import { generateChords } from '../module/generator';
    import type { ChordInput } from '../module/inputclasses';
    import type { ChordOutput } from '../module/outputclasses';
    import { transposeChords } from '../module/utils';

    let chordInput: ChordInput;
    let chordOutput: ChordOutput;

    function generate() {
        chordOutput = generateChords(chordInput);
    }

    function transpose(n: number) {
        chordOutput = transposeChords(chordOutput, n);
    }
</script>

<ChordInputArea bind:chordInput />
<div class="button-wrapper">
    <Button on:clickButton={generate} label="generate" />
</div>
<div class="clicktext-wrapper">
    <TextToClick
        on:clickText={() => {
            transpose(1);
        }}
        label="transpose +1"
    />
    <TextToClick
        on:clickText={() => {
            transpose(-1);
        }}
        label="-1"
    />
</div>
<ChordOutputArea bind:chordOutput />
<ChordOutputStore bind:chordOutput />

<style>
    .button-wrapper {
        max-width: 500px;
        margin: 0 auto;
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        justify-content: center;
    }

    .clicktext-wrapper {
        max-width: 700px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        padding-top: 30px;
        padding-left: 20px;
    }
</style>
