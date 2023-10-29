import CanvasJS from '@canvasjs/charts'

export const renderBarChart = (title, data) => {
    var chart = new CanvasJS.Chart("bar-chart-container", {
        title:{
          text: title,
          fontFamily: "Roboto, Arial"         
        },
        axisX: {
          title: "Spending Categories",
          titleFontFamily: "Roboto, sans-serif",
          labelFontFamily: "Roboto, sans-serif"
        },
        axisY: {
          title: "Dollars Spent",
          titleFontFamily: "Roboto, sans-serif",
          labelFontFamily: "Roboto, sans-serif"
        },
        data: [{
          type: "column",
          dataPoints: data
        }]
      });
      chart.render();
}
