<script lang="ts">
    export let label: string;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function clickButton() {
        dispatch('clickButton');
    }
</script>

<button on:click={clickButton}>{label}</button>

<style>
    button {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 7px 22px;
        width: 105px;
        height: 38px;
        background: #54c2f1;
        border: 2px solid #95d5f0;
        border-radius: 10px;

        color: #ffffff;

        transition: 0.2s;
    }

    button:hover {
        background: #13aff1;
    }

    button:active {
        background: #31a9dd;
    }
</style>
