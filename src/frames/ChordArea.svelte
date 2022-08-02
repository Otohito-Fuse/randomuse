<script lang="ts">
    import ChordInputArea from './ChordInputArea.svelte';
    import ChordOutputArea from './ChordOutputArea.svelte';
    import Button from '../components/Button.svelte';

    import { generateChords } from '../module/generator';
    import type { ChordInput } from '../module/inputclasses';
    import type { ChordOutput } from '../module/outputclasses';

    let chordInput: ChordInput;
    let chordOutput: ChordOutput;

    function generate() {
        chordOutput = generateChords(chordInput);
    }
</script>

<ChordInputArea bind:chordInput />
<div class="button-wrapper">
    <Button on:clickButton={generate} label="generate" />
</div>
<ChordOutputArea bind:chordOutput />

<style>
    .button-wrapper {
        max-width: 500px;
        margin: 0 auto;
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        justify-content: center;
    }
</style>
