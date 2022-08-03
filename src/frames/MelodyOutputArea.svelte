<script lang="ts">
    import { noteHeightToPitchName } from '../module/utils';
    import { MelodyOutput } from '../module/outputclasses';

    export let melodyOutput: MelodyOutput = new MelodyOutput();
</script>

{JSON.stringify(melodyOutput.noteHeights.map((e) => noteHeightToPitchName(e)))}
