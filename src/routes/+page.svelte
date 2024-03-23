<script>
  import ListVehicles from '$lib/components/ListVehicles.svelte';
  import NumberOfVehicles from '$lib/components/NumberOfVehicles.svelte';
</script>
  
  <div class="container">
    <NumberOfVehicles />
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
  