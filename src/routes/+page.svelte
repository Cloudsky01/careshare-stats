<script>
	import UsageOfNetworkTable from '$lib/components/UsageOfNetworkTable.svelte';
    import 'bulma/css/bulma.css';
</script>

<div class="content">
  <h1>CARSHARE-STATS</h1>
  <p>Carshare-stats is a simple web application that displays the number of vehicles in a carshare service.</p>
  <p>It consists of the following pages:</p>
  <ul>
    <li><a href="/map">Map</a>: Displays a map with the location of the vehicles.</li>
    <li><a href="/chart">Chart</a>: Displays a chart with the number of vehicles per day.</li>
    <li><a href="/about">About</a>: Information about the application.</li>
    <li><a href="/contact">Contact</a>: Contact information.</li>
  </ul>
  <p>Click on the links above to navigate to the different pages.</p>
  <h2>Usage of the Network</h2>
  <p>This table shows the averaged usage of the network per day</p>
  <UsageOfNetworkTable />
</div>

<style>
  .content {
    padding: 20px;
    margin: 0 auto;
  }
</style>