var xValues = ["Ahmedabad", "Vadodara", "Surat", "Rajkot"];
var yValues = [55, 49, 44, 24];
var barColors = "#6ec1e4";

new Chart("barChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Cities"
    }
  }
});