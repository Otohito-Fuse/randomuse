<script lang="ts">
    import MelodyInputArea from './MelodyInputArea.svelte';
    import MelodyOutputArea from './MelodyOutputArea.svelte';
    import MelodyOutputStore from './MelodyOutputStore.svelte';
    import Button from '../components/Button.svelte';
    import TextToClick from '../components/TextToClick.svelte';

    import { generateMelody } from '../module/generator';
    import type { MelodyInput } from '../module/inputclasses';
    import type { MelodyOutput } from '../module/outputclasses';
    import {
        transposeMelody,
        reverseMelody,
        invertMelody,
    } from '../module/utils';

    let melodyInput: MelodyInput;
    let melodyOutput: MelodyOutput;

    function generate() {
        melodyOutput = generateMelody(melodyInput);
    }

    function transpose(n: number) {
        melodyOutput = transposeMelody(melodyOutput, n);
    }

    function reverse() {
        melodyOutput = reverseMelody(melodyOutput);
    }

    function invert() {
        melodyOutput = invertMelody(melodyOutput, 72);
    }
</script>

<MelodyInputArea bind:melodyInput />
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
    <TextToClick on:clickText={reverse} label="reverse" />
    <TextToClick on:clickText={invert} label="invert" />
</div>
<MelodyOutputArea bind:melodyOutput />
<MelodyOutputStore bind:melodyOutput />

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
