// Gráfico semanal
const ctx = document.getElementById('weeklyChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    datasets: [{
      label: 'Corridas',
      data: [50, 80, 60, 100, 70],
      backgroundColor: '#ffcc00'
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});
