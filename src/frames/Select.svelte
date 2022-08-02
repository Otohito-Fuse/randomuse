<script lang="ts">
    export let selected: string;

    import RadioButton from '../components/RadioButton.svelte';
</script>

<div class="main-area">
    <div class="h2-wrapper">
        <h2>Generate</h2>
    </div>
    <div class="button-wrapper">
        <RadioButton
            bind:selected
            name="kind"
            value="chords"
            label="Chords"
            id="chords"
        />
        <RadioButton
            bind:selected
            name="kind"
            value="melody"
            label="Melody"
            id="melody"
        />
        <RadioButton
            bind:selected
            name="kind"
            value="rhythm"
            label="Rhythm"
            id="rhythm"
        />
    </div>
</div>

<style>
    .main-area {
        max-width: 500px;
        margin: 0 auto;
    }

    .h2-wrapper {
        width: 100%;
        display: block;
        padding-top: 30px;
        padding-left: 20px;
        padding-bottom: 15px;
    }

    .button-wrapper {
        width: 100%;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
    }
</style>
