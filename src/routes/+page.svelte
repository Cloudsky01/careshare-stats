<script>
    import ListVehicles from '$lib/components/ListVehicles.svelte';
	import Map from '$lib/components/Map.svelte';
  </script>
  
  <div class="container">
    <div id="map" style="height: 80vh;">
        <!-- <Map /> -->
    </div>
    <ListVehicles />
  </div>
  
  <style>
    .container {
      display: grid;
      grid-template-rows: 1fr auto;
      gap: 1rem;
    }
  
    @media (max-width: 768px) {
      .container {
        grid-template-rows: auto;
        grid-template-columns: 1fr;
      }
    }
  </style>
  