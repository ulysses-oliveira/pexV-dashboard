
let salesChart;
let flavorChart;

async function loadDashboard() {
  const API_URL = 'http://localhost:7001';
  
  const summary = await fetch(API_URL + '/dashboard/summary').then(r => r.json());
  const salesByDay = await fetch(API_URL + '/dashboard/sales-by-day').then(r => r.json());
  const salesByFlavor = await fetch(API_URL + '/dashboard/sales-by-flavor').then(r => r.json());
  const sales = await fetch(API_URL + '/sales').then(r => r.json());

  document.getElementById('totalRevenue').innerText =
    'R$ ' + summary.totalRevenue.toFixed(2);

  document.getElementById('totalSales').innerText =
    summary.totalSales;

  const avg = summary.totalSales > 0
    ? summary.totalRevenue / summary.totalSales
    : 0;

  document.getElementById('avgTicket').innerText =
    'R$ ' + avg.toFixed(2);

  // Destroy previous charts (evita bug ao recarregar)
  if (salesChart) salesChart.destroy();
  if (flavorChart) flavorChart.destroy();

  salesChart = new Chart(document.getElementById('salesByDay'), {
    type: 'line',
    data: {
      labels: salesByDay.map(d => d.date),
      datasets: [{
        label: 'Receita',
        data: salesByDay.map(d => d.total),
        borderWidth: 2,
        fill: false
      }]
    }
  });

  flavorChart = new Chart(document.getElementById('salesByFlavor'), {
    type: 'bar',
    data: {
      labels: salesByFlavor.map(f => f.name),
      datasets: [{
        label: 'Quantidade Vendida',
        data: salesByFlavor.map(f => f.quantity),
        borderWidth: 1
      }]
    }
  });

  const table = document.getElementById('salesTable');
  table.innerHTML = '';

  sales.slice(0, 5).forEach(sale => {
    const row = `
      <tr>
        <td>${new Date(sale.createdAt).toLocaleDateString()}</td>
        <td>R$ ${sale.totalAmount.toFixed(2)}</td>
        <td>${sale.paymentMethod || '-'}</td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

loadDashboard();