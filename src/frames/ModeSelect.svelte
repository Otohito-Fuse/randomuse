<script lang="ts">
    export let mode: string;

    import RadioButton from '../components/RadioButton.svelte';
</script>

<div class="main-area">
    <div class="h2-wrapper">
        <h2>Mode Select</h2>
    </div>
    <div class="radio-wrapper">
        <RadioButton
            bind:selected={mode}
            name="mode"
            value="generate"
            label="Generate"
            id="generate"
        />
        <RadioButton
            bind:selected={mode}
            name="mode"
            value="browse"
            label="Browse"
            id="browse"
        />
    </div>
</div>

<style>
    .main-area {
        max-width: 800px;
        margin: 0 auto;
    }

    .h2-wrapper {
        width: 100%;
        display: block;
        padding-top: 30px;
        padding-left: 20px;
        padding-bottom: 15px;
    }

    .radio-wrapper {
        width: 100%;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 30px;
    }
</style>
