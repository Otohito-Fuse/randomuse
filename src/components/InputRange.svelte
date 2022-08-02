<script lang="ts">
    export let value: number;
    export let min: number;
    export let max: number;
</script>

<input type="range" bind:value {min} {max} />

<style>
    input[type='range'] {
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
        outline: none;
        height: 10px;
        width: 100%;
        background: #95d5f0;
        border-radius: 10px;
        border: solid 3px #d7e9f1;
    }

    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: #54c2f1;
        width: 19px;
        height: 19px;
        border-radius: 50%;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
        border: none;
    }

    input[type='range']::-moz-range-thumb {
        background: #54c2f1;
        width: 19px;
        height: 19px;
        border-radius: 50%;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
        border: none;
    }

    input[type='range']::-moz-focus-outer {
        border: 0;
    }

    input[type='range']:active::-webkit-slider-thumb {
        box-shadow: 0px 3px 6px -1px rgba(0, 0, 0, 0.2);
    }
</style>
