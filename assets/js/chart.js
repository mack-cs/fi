document.addEventListener("DOMContentLoaded", function(){
    var fundingData = $('#fundingData'),
      series = fundingData.data('chart'),
      includeTrend = fundingData.data('includetrend');
  
    series.forEach(function(el) {
      el[0] = new Date(el[0]);
    });
  
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
  
    function drawChart() {
      var data = new google.visualization.DataTable();
  
      data.addColumn('date', "Date");
      data.addColumn('number', "Funds");
      data.addColumn('number', 'Goal');
  
      if (includeTrend) {
        data.addColumn('number', 'Trend');
        data.addColumn({id: 'Projection Low', label: 'Projection - Low', type: 'number', role: 'interval'});
        data.addColumn({id: 'Projection High', label: 'Projection - High', type: 'number', role: 'interval'});
        data.addColumn({'type': 'string', 'role': 'tooltip'});
      }
  
      data.addRows(series);
  
      var options = {
        lineWidth: 3,
        pointSize: 5,
        curveType: 'function',
        seriesType: 'area',
        intervals: {
          'style': 'area',
          color: 'purple'
        },
        animation: {
          startup: true,
          duration: 1000,
          easing: 'out'
        },
        vAxis: {
          title: 'Funds Raised',
          format: "$#,###",
          textStyle: {fontSize: 12},
          gridlines: {color: '#eee'},
          viewWindowMode: 'pretty',
        },
        hAxis: {
          format: "dd/MM/yyyy", // Change the date format here
          textStyle: {fontSize: 12},
          slantedText: true,
          gridlines: {count: 10, color: '#eee'},
          viewWindow: {
            min: series[0][0],
            max: series[series.length - 1][0]
          }
        },
        series: {
          4: {color: 'blue', type: 'line', visibleInLegend: false, pointSize: 0, lineDashStyle: [2, 2]}, // Change the color to blue
          3: {color: 'red', type: 'line', visibleInLegend: false, pointSize: 0, lineDashStyle: [2, 2]}, // Change the color to red
          2: {color: 'green', type: 'line', pointSize: 5, lineDashStyle: [2, 2]}, // Change the color to green
          1: {color: 'orange', type: 'line', pointSize: 0, lineDashStyle: [2, 2]}, // Change the color to orange
          0: {color: '#328896', type: 'area', pointSize: 5}, // Keep the color for the area
        }
      };
  
      var chart = new google.visualization.ComboChart(document.getElementById('chart-funding-progress'));
      chart.draw(data, options);
    }
  
    $(window).resize(function() {
      drawChart();
    });
  
  });
  