<script lang="ts">
    import Header from './Header.svelte';
    import Select from './Select.svelte';
    import ChordArea from './ChordArea.svelte';
    import MelodyArea from './MelodyArea.svelte';
    import RhythmArea from './RhythmArea.svelte';

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
