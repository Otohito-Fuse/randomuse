<script lang="ts">
    export let value: number;
    export let min: number;
    export let max: number;
</script>

<input type="range" bind:value {min} {max} />

<style>
    input[type='range'] {
        -webkit-appearance: none; /* 🚩これ無しだとスタイルがほぼ全く反映されないので注意 */
        appearance: none;
        cursor: pointer; /* カーソルを分かりやすく */
        outline: none; /* スライダーのアウトラインは見た目がキツイので消す */
        height: 10px; /* バーの高さ */
        width: 100%; /* バーの幅 */
        background: #95d5f0; /* バーの背景色 */
        border-radius: 10px; /* バーの両端の丸み */
        border: solid 3px #d7e9f1; /* バー周囲の線 */
    }
    /* WebKit向けのつまみ */
    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none; /*  🚩デフォルトのつまみのスタイルを解除 */
        background: #54c2f1; /* 背景色 */
        width: 19px; /* 幅 */
        height: 19px; /* 高さ */
        border-radius: 50%; /* 円形に */
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15); /* 影 */
        border: none; /* デフォルトの線を消す */
    }
    /* Moz向けのつまみ */
    input[type='range']::-moz-range-thumb {
        background: #54c2f1; /* 背景色 */
        width: 19px; /* 幅 */
        height: 19px; /* 高さ */
        border-radius: 50%; /* 円形に */
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15); /* 影 */
        border: none; /* デフォルトの線を消す */
    }
    /* Firefoxで点線が周りに表示されてしまう問題の解消 */
    input[type='range']::-moz-focus-outer {
        border: 0;
    }
    /* つまみをドラッグしているときのスタイル */
    input[type='range']:active::-webkit-slider-thumb {
        box-shadow: 0px 3px 6px -1px rgba(0, 0, 0, 0.2);
    }
</style>
