<script>
	import GeneralAPIService from "$lib/services/GeneralAPIService";
    import UsageOfNetworkCounter from "./UsageOfNetworkCounter.svelte";
    import { onMount } from 'svelte';
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    onMount(() => {
        let api = new GeneralAPIService();
        api.getEstimatedUsageOfNetworkByWeek().then((data) => {
            console.log(data);
        });
    });
</script>

<style>
    /* General table styling */
    .table {
        width: 100%;
        border-collapse: collapse;
    }
    
    /* Header styling */
    thead th {
        background-color: #333; /* Dark background for the header */
        color: white;
        text-align: center;
        border: none;
    }

    /* Body styling */
    tbody td {
        background-color: #000; /* Dark background for the cells */
        color: white;
        text-align: center;
        border: none;
    }

    tbody tr {
        border: none;
    }

    /* Row styling, if you want alternating colors (optional) */
    tbody tr:nth-child(odd) {
        background-color: #444; /* Slightly lighter for alternating rows */
    }
    
    /* Responsive considerations */
    @media (max-width: 768px) {
        /* Adjust font sizes, padding, or other properties for mobile view */
    }
</style>
<div class="table-container">
    <table class="table is-bordered is-striped is-narrow is-hoverable">
        <thead>
            <tr>
                {#each days as day}
                    <th>{day}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            <tr>
                {#each days as day}
                    <td><UsageOfNetworkCounter /></td>
                {/each}
            </tr>
        </tbody>
    </table>
</div>
