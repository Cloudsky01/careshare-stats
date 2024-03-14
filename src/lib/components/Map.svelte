<script>
    import { onMount } from 'svelte';

    let map;
    let L;

    onMount(async () => {
        // Dynamically import Leaflet to ensure it's only loaded in the browser
        // @ts-ignore
        L = await import('leaflet');
        // Import the Leaflet CSS
        await import('leaflet/dist/leaflet.css');

        // Initialize the map
        map = L.map('map').setView([51.505, -0.09], 13);

        // Add a tile layer to the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(map);
    });
</script>

<style>
    #map {
        height: 400px;
    }
</style>

<div id="map"></div>
