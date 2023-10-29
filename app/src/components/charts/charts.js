import CanvasJS from '@canvasjs/charts'

export const renderBarChart = (title, data) => {
    var chart = new CanvasJS.Chart("bar-chart-container", {
        title:{
          text: title           
        },
        data: [{
          type: "column",
          dataPoints: data
        }]
      });
      chart.render();
}
