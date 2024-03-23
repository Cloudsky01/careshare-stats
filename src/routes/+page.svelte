<script>
    import UsageOfNetwork from '$lib/components/UsageOfNetwork.svelte';
    import 'bulma/css/bulma.css';
</script>

<html>
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
    <UsageOfNetwork />
  </div>
</html>

<style>
  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
</style>