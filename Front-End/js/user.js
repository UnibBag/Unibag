document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('weeklySalesChart').getContext('2d');
    const labels = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']; 
    const data = [400, 950, 500, 800, 600];

    const weeklySalesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Vendas',
                data: data,
                backgroundColor: '#FFD166', 
                borderColor: '#FFD166',
                borderWidth: 1,
                borderRadius: 5,
                barThickness: 20 
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false 
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `Vendas: ${context.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false, 
                        color: '#f0f0f0' 
                    },
                    ticks: {
                        stepSize: 200, 
                        callback: function (value) {
                            return value > 0 ? value : ''; 
                        }
                    }
                },
                x: {
                    grid: {
                        display: false 
                    },
                    ticks: {
                        font: {
                            weight: '500' 
                        }
                    }
                }
            }
        }
    });
});