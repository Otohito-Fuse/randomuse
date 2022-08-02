<script lang="ts">
    import Header from './Header.svelte';
    import Select from './frames/Select.svelte';
    import ChordArea from './frames/ChordArea.svelte';
    import MelodyArea from './frames/MelodyArea.svelte';
    import RhythmArea from './frames/RhythmArea.svelte';

    let selected: string = 'chords';
</script>

<Header />
<div class="main-area">
    <Select bind:selected />
    {#if selected == 'chords'}
        <ChordArea />
    {:else if selected == 'melody'}
        <MelodyArea />
    {:else}
        <RhythmArea />
    {/if}
</div>

<style>
    .main-area {
        max-width: 1000px;
        margin: 0 auto;
    }
</style>
