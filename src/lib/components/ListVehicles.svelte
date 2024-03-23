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

{#if vehicles.length > 0}
    <ul>
        {#each vehicles as vehicle}
            <li>
                <span>{vehicle.name}</span>
                <span>{vehicle.id}</span>
                <span>Last Used: {vehicle.lastUsed}</span>
            </li>
        {/each}
    </ul>
{:else}
    <p>No vehicles found.</p>
{/if}