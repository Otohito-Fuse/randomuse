<script lang="ts">
    import MelodyInputArea from './MelodyInputArea.svelte';
    import MelodyOutputArea from './MelodyOutputArea.svelte';
    import Button from '../components/Button.svelte';

    import { generateMelody } from '../module/generator';
    import type { MelodyInput } from '../module/inputclasses';
    import type { MelodyOutput } from '../module/outputclasses';

    let melodyInput: MelodyInput;
    let melodyOutput: MelodyOutput;

    function generate() {
        melodyOutput = generateMelody(melodyInput);
    }
</script>

<MelodyInputArea bind:melodyInput />
<div class="button-wrapper">
    <Button on:clickButton={generate} label="generate" />
</div>
<MelodyOutputArea bind:melodyOutput />

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
