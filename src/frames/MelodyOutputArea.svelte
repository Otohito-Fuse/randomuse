<script lang="ts">
    import {
        noteHeightToPitchName,
        noteHeightTransformation,
    } from '../module/utils';
    import { MelodyOutput } from '../module/outputclasses';

    import OneLineScore from '../score/OneLineScore.svelte';

    export let melodyOutput: MelodyOutput = new MelodyOutput();

    $: notesArray = noteHeightTransformation(melodyOutput);

    const xLength: number = 2000;
    const yLength: number = 400;
    const xLeftEnd: number = 100;
</script>

<div class="wrapper">
    <svg viewBox="0 0 {xLength} {yLength}" preserveAspectRatio="xMidYMin">
        <OneLineScore {xLength} {xLeftEnd} yCenter={yLength / 2} {notesArray} />
    </svg>
</div>

<style>
    .wrapper {
        margin: 10px auto;
        width: 100%;
    }

    svg {
        width: 100%;
        height: 20%;
    }
</style>
