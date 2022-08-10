<script lang="ts">
    import RhythmInputArea from './RhythmInputArea.svelte';
    import RhythmOutputArea from './RhythmOutputArea.svelte';
    import RhythmOutputStore from './RhythmOutputStore.svelte';
    import Button from '../components/Button.svelte';

    import { generateRhythm } from '../module/generator';
    import type { RhythmInput } from '../module/inputclasses';
    import type { RhythmOutput } from '../module/outputclasses';

    let rhythmInput: RhythmInput;
    let rhythmOutput: RhythmOutput;

    function generate() {
        rhythmOutput = generateRhythm(rhythmInput);
    }
</script>

<RhythmInputArea bind:rhythmInput />
<div class="button-wrapper">
    <Button on:clickButton={generate} label="generate" />
</div>
<RhythmOutputArea bind:rhythmOutput />
<RhythmOutputStore bind:rhythmOutput />

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
