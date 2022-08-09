<script lang="ts">
    import { RhythmOutput } from '../module/outputclasses';

    export let rhythmOutput: RhythmOutput = new RhythmOutput();
</script>

{JSON.stringify(rhythmOutput)}

<div class="main-area">
    <table class="table" />
</div>

<style>
    .main-area {
        max-width: 800px;
        margin: 0 auto;
        padding-top: 15px;
        padding-bottom: 25px;
    }
</style>
