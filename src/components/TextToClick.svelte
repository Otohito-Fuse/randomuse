<script lang="ts">
    export let label: string;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function clickText() {
        dispatch('clickText');
    }
</script>

<button on:click={clickText}>{label}</button>

<style>
    button {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 7px 10px;
        height: 38px;
        color: #13aff1;
        text-decoration-line: underline;

        transition: 0.2s;
    }

    button:hover {
        color: #31a9dd;
    }
</style>
