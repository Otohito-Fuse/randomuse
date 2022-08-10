<script lang="ts">
    import { RhythmOutput } from '../module/outputclasses';
    import { rhythmTransformation } from '../module/utils';

    export let rhythmOutput: RhythmOutput = new RhythmOutput();
    $: array = rhythmTransformation(rhythmOutput);
</script>

<div class="main-area">
    <table class="table">
        {#each array as smallArray}
            <tr>
                {#each smallArray as [bool, n]}
                    {#if bool}
                        {#if n >= 10}
                            <td class="each-td true big-number">{n}</td>
                        {:else}
                            <td class="each-td true small-number">{n}</td>
                        {/if}
                    {:else}
                        <td class="each-td false" />
                    {/if}
                {/each}
            </tr>
        {/each}
    </table>
</div>

<style>
    .main-area {
        max-width: 800px;
        margin: 0 auto;
        padding-top: 15px;
        padding-bottom: 25px;
    }

    table {
        width: 90%;
        margin: 0 auto;
        table-layout: fixed;
        border-collapse: collapse;
    }

    .each-td {
        height: 50px;
        border: solid 1px #0f0f0f;
        text-align: center;
        vertical-align: middle;
    }

    .true {
        background-color: #31a9dd;
    }

    .false {
        background-color: #95d5f0;
    }

    .small-number {
        font-size: 0.8rem;
    }

    .big-number {
        font-size: 0.5rem;
    }

    @media (max-width: 800px) {
        .small-number {
            font-size: 0.7rem;
        }

        .big-number {
            font-size: 0.4rem;
        }
    }

    @media (max-width: 500px) {
        .small-number {
            font-size: 0.5rem;
        }

        .big-number {
            font-size: 0.3rem;
        }
    }
</style>
