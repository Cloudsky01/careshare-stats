<script>
	import ListVehicles from "$lib/components/ListVehicles.svelte";
    import Map from "$lib/components/Map.svelte";
</script>

<div class="content">
    <ListVehicles />
    <Map />
</div>



<style>
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
  
    @media (max-width: 768px) {
      .content {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
      }
    }
  </style>