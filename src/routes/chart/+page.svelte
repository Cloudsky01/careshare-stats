<script>
    import NumberOfVehicles from '$lib/components/NumberOfVehiclesChart.svelte';
	import UsageOfNetworkTable from '$lib/components/UsageOfNetworkTable.svelte';
</script>


<div class="container">
    <div class="content">
        <h1>Carshare Stats</h1>
        <p>Carshare Stats is a simple web application that displays the number of vehicles in a carshare service.</p>
    <NumberOfVehicles />
    <h2>Usage of the Network</h2>
</div>
  <UsageOfNetworkTable />
</div>

