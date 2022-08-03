<script lang="ts">
    export let selected: string;
    export let name: string;
    export let value: string;
    export let label: string;
    export let id: string;
</script>

<div>
    <input
        class="visually-hidden"
        bind:group={selected}
        type="radio"
        {name}
        {value}
        {id}
    />
    <label for={id}>{label}</label>
</div>

<style>
    div {
        padding: 5px 7px;
    }

    label {
        position: relative;
        cursor: pointer;
        padding-left: 23px;
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        user-select: none; /* CSS3 */
        -moz-user-select: none; /* Firefox */
        -webkit-user-select: none; /* Safari、Chromeなど */
        -ms-user-select: none; /* IE10から */
    }

    label::before,
    label::after {
        content: '';
        display: block;
        border-radius: 50%;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        transition: 0.2s;
    }

    label::before {
        background-color: #fbfbfb;
        border: 1px solid #95d5f0;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        left: 0px;
    }

    label::after {
        background-color: #54c2f1;
        border-radius: 50%;
        opacity: 0;
        width: 11px;
        height: 11px;
        left: 2px;
    }

    input:checked + label::after {
        opacity: 1;
    }

    input:hover + label::before {
        border: 1px solid #54c2f1;
    }

    .visually-hidden {
        position: absolute;
        white-space: nowrap;
        border: 0;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        overflow: hidden;
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
    }
</style>
