<script>
    import { writable } from 'svelte/store';
    let usage = 50;
    // Create a writable store for the percentage value
    let percentageStore = writable(0);

    // Update the store value whenever the usage changes
    $: {
        percentageStore.set(Math.min(Math.max(usage, 0), 100));
    }
</script>

<p class="usage-number">{$percentageStore}</p>

<style>
    .usage-number {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-weight: bold;
        display: inline-block;
    }
</style>