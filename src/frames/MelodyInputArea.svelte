<script lang="ts">
    // export let numOfNotes: number;
    // export let bottom: number;
    // export let top: number;

    let value: number = 50;
    let min: number = 0;
    let max: number = 100;

    $: label2 = value.toString();

    import RangeArea from './RangeArea.svelte';
</script>

<div>
    <RangeArea bind:value {min} {max} label1="C" {label2} />
</div>

<style>
    div {
        max-width: 340px;
        margin: 0 auto;
    }
</style>
