<script lang="ts">
    export let cx: number;
    export let cy: number;
    export let scale: number;

    $: rx = 17.5 * 0.37894733 * 1.9 * scale;
    $: ry = 17.5 * 0.2542448 * 1.9 * scale;
</script>

<ellipse
    style="fill: #000000; fill-rule: evenodd; stroke-width: 0"
    {cx}
    {cy}
    {rx}
    {ry}
    transform="rotate(-25, {cx}, {cy})"
/>
