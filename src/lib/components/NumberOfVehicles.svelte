<script>
    import { onMount } from 'svelte';
    import { Chart } from 'chart.js/auto';
    let chart;

    onMount(() => {
        // @ts-ignore
        const ctx = document.getElementById('chart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Number of Vehicles',
                    data: [10, 15, 8, 12, 20, 14, 18],
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
                }
            }
        });
    });
</script>

<canvas id="chart"></canvas>