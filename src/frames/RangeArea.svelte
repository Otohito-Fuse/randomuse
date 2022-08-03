<script lang="ts">
    export let value: number;
    export let min: number;
    export let max: number;
    export let label1: string;
    export let label2: string;

    import InputRange from '../components/InputRange.svelte';
</script>

<div class="wrapper">
    <div class="div1">
        <p>{label1}</p>
    </div>
    <div class="div2">
        <InputRange bind:value {min} {max} />
    </div>
    <div class="div3">
        <p>{label2}</p>
    </div>
</div>

<style>
    .wrapper {
        max-width: 100%;
        justify-content: center;
        display: flex;
        padding-top: 11px;
        padding-bottom: 11px;
    }

    .div1 {
        width: 25%;
        padding-left: 14px;
    }

    .div2 {
        width: 50%;
    }

    .div3 {
        width: 25%;
        text-align: right;
        padding-right: 14px;
    }

    p {
        user-select: none; /* CSS3 */
        -moz-user-select: none; /* Firefox */
        -webkit-user-select: none; /* Safari、Chromeなど */
        -ms-user-select: none; /* IE10から */
    }
</style>
