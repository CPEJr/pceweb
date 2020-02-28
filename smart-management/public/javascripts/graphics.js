$(document).ready(update);

var myChart = document.getElementsByClassName("line-chart");
function update() {
  $.get('/receberDados', (response) => {
    updatechart(response);
    }).then(setTimeout(update, 6000));
  }


function updatechart(data) {
  console.log("GRAFICOOO ENTROU")
var eixox = []
var eixoy = []
for (let i = 0; i < data.length / 5; i++) {
eixoy[i] = data[i]['data'];
eixox[i] = i;
}
myChart.data.labels = eixox;
myChart.data.datasets[0].data = eixoy;
myChart.update();
}
