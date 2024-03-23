<script>
    import { onMount } from 'svelte';
    import { Chart } from 'chart.js/auto';
    import GeneralAPIService from '$lib/services/GeneralAPIService';

    let chart;

    onMount(async () => {
        const apiService = new GeneralAPIService();
        const data = await apiService.getNumberOfVehicles()

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
                    backgroundColor: 'rgba(0, 255, 0, 0.5)', // Light green with some transparency
                    borderColor: 'rgba(0, 255, 0, 1)', // Solid green
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: false, // Hide grid lines
                        },
                        ticks: {
                            color: 'white', // White tick labels
                        }
                    },
                    x: {
                        grid: {
                            display: false, // Hide grid lines
                        },
                        ticks: {
                            color: 'white', // White tick labels
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false, // Hide legend
                    }
                },
                layout: {
                    padding: 20, // Minimal padding around
                }
            }
        });
    });
</script>
<style>
    #chart {
        background-color: #0f0e0e;
    }
</style>

<canvas id="chart" width=100% height=100%></canvas>
