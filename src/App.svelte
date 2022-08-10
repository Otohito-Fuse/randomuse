<script lang="ts">
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import Select from './frames/Select.svelte';
    import ModeSelect from './frames/ModeSelect.svelte';
    import ChordArea from './frames/ChordArea.svelte';
    import MelodyArea from './frames/MelodyArea.svelte';
    import RhythmArea from './frames/RhythmArea.svelte';
    import BrowseArea from './frames/BrowseArea.svelte';

    let selected: string = 'chords';
    let mode: string = 'generate';
</script>

<Header />
<div class="main-area">
    <ModeSelect bind:mode />
    {#if mode == 'generate'}
        <Select bind:selected />
        {#if selected == 'chords'}
            <ChordArea />
        {:else if selected == 'melody'}
            <MelodyArea />
        {:else}
            <RhythmArea />
        {/if}
    {:else}
        <BrowseArea />
    {/if}
</div>
<Footer />

<style>
    .main-area {
        max-width: 1000px;
        margin: 0 auto;
    }
</style>
