<script lang="ts">
    import { onMount } from 'svelte';
    import type { Vehicle } from "$lib/models/Vehicle";
    import ApiVehicleService from '$lib/services/ApiVehicleService';

    let vehicles: Vehicle[] = [];
    const api = new ApiVehicleService();

    onMount(async () => {
        try {
            vehicles = await api.getVehicles();
        } catch (error) {
            console.error("Failed to fetch vehicles:", error);
        }
    });
</script>

<div class="columns is-multiline" style="max-height: 800px; overflow-y: auto;">
    {#if vehicles.length > 0}
        {#each vehicles as vehicle}
            <div class="column is-12">
                <div class="box">
                    <span>{vehicle.name}</span>
                    <br>
                    <span>{vehicle.id}</span>
                    <br>
                    <span>Last Used: {vehicle.lastUsed}</span>
                </div>
            </div>
        {/each}
    {:else}
        <p>No vehicles found.</p>
    {/if}
</div>

<style>
  /* Optional: Additional styling for the scroll and columns if needed */
</style>

