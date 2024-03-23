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
<div class="content">
    <h1>Flex Vehicle List</h1>
    <div class="columns is-multiline" style="max-height: 1200px; overflow-y: auto; margin: 20px">
            {#if vehicles.length > 0}
                {#each vehicles as vehicle}
                    <div class="column is-12">
                        <div class="box">
                            <span>{vehicle.vehicleId}</span>
                            <br>
                            <span>Latitude: {vehicle.vehicleLocation.lat}</span>
                            <br>
                            <span>Longitude: {vehicle.vehicleLocation.lng}</span>
                            <br>
                            <span>Last Used: {vehicle.lastUsed}</span>
                        </div>
                    </div>
                {/each}
            {:else}
                <p>No vehicles found.</p>
            {/if}
    </div>
</div>

<style>
  @media (max-width: 768px) {
        .columns {
            max-height: 50px;
        }
    }
</style>

