<script lang="ts">
    import { onMount } from 'svelte';
    import ApiService from '$lib/services/ApiService';
    import type { Vehicle } from "$lib/models/Vehicle";

    let vehicles: Vehicle[] = [];
    const api = new ApiService('https://your-api-gateway-url.amazonaws.com/prod');

    onMount(async () => {
        try {
            vehicles = await api.get('vehicles');
        } catch (error) {
            console.error("Failed to fetch vehicles:", error);
        }
    });
</script>

{#if vehicles.length > 0}
    <ul>
        {#each vehicles as vehicle}
            <li>{vehicle.name}</li>
        {/each}
    </ul>
{:else}
    <p>No vehicles found.</p>
{/if}