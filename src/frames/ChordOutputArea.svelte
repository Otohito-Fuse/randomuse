<script lang="ts">
    import { ChordOutput } from '../module/outputclasses';
    import { noteSymbolDeToEn } from '../module/utils';

    export let chordOutput: ChordOutput = new ChordOutput();

    $: numOfChordsResidue = (4 - (chordOutput.chords.length % 4)) % 4;
</script>

<div class="main-area">
    <div class="chords-wrapper">
        {#each chordOutput.chords as chord}
            <div class="each-chord-block">
                <span class="root">
                    {noteSymbolDeToEn.get(chord.root)}
                </span>
                <span class="suffix">
                    {chord.suffix}
                </span>
            </div>
        {/each}
        {#each Array(numOfChordsResidue) as _}
            <div class="each-chord-block" />
        {/each}
    </div>
</div>

<style>
    .main-area {
        max-width: 800px;
        margin: 0 auto;
        padding-top: 15px;
        padding-bottom: 25px;
    }

    .chords-wrapper {
        width: 100%;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        gap: 15px 0;
        padding-left: 5%;
        padding-right: 5%;
    }

    .each-chord-block {
        width: 25%;
        padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 5%;
    }

    .root {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        padding: 0;
    }

    .suffix {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        padding: 0;
        margin: 0;
    }

    @media (max-width: 500px) {
        .root {
            font-size: 15px;
        }

        .suffix {
            font-size: 12px;
        }
    }
</style>
