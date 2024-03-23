<script>
    import { onMount } from 'svelte';
    import { Chart } from 'chart.js/auto';
    import GeneralAPIService from '$lib/services/GeneralAPIService';

    let chart;

    onMount(async () => {
        const apiService = new GeneralAPIService();
        const data = await apiService.getNumberOfVehicles();

        // Extract the necessary data from the API response
        const labels = data.map(item => item.timestamp);
        const vehicleCounts = data.map(item => item.value);

        // @ts-ignore
        const ctx = document.getElementById('chart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Vehicles',
                    data: vehicleCounts,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                }
            }
        });
    });
</script>

<canvas id="chart"></canvas>