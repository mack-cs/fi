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
          2: {color: '#E63946', type: 'line', pointSize: 5, lineDashStyle: [2, 2]}, // Change the color to green
          1: {color: 'orange', type: 'line', pointSize: 0, lineDashStyle: [2, 2]}, // Change the color to orange
          0: {color: '#3376BD', type: 'area', pointSize: 5}, // Keep the color for the area
        }
      };
  
      var chart = new google.visualization.ComboChart(document.getElementById('chart-funding-progress'));
      chart.draw(data, options);
    }
  
    $(window).resize(function() {
      drawChart();
    });
  
  });
  


  document.addEventListener("DOMContentLoaded", function(){
    // Function to create the chart with custom data
    function createCustomChart(chartId, data, yAxisTitle, chartType) {
      var formatOption = chartType === "backers" ? "#,###" : "$#,###";

      new Chartkick.ColumnChart(chartId, data, {
        adapter: "google",
        library: {
          // Custom configuration options if needed
          animation: { startup: true, duration: 1000, easing: "out" },
          vAxis: { title: yAxisTitle, format: formatOption, textStyle: { fontSize: 10 }, gridlines: { color: "#eee" } },
          hAxis: { format: "M/d/yy", textStyle: { fontSize: 10 }, slantedText: true, gridlines: { count: 10, color: "#eee" } },
          lineWidth: 3,
          pointSize: 5,
          curveType: "function",
          colors: ["#3376BD"]
        }
      });
    }

    // Example data for funding chart
    var initialFundingData = [
      ["11/07/23", 1000000.0],
      ["11/08/23", 256450.0],
      ["11/09/23", 90466.0],
      ["11/10/23", 35450.0],
      ["11/11/23", 45397.0],
      ["11/12/23", 24794.0],
      ["11/13/23", 17846.0],
      ["11/14/23", 27960.0],
      ["11/15/23", 37862.0],
      ["11/16/23", 57068.0],
      ["11/17/23", 33031.0],
      ["11/18/23", 48801.0],
      ["11/19/23", 35598.0],
      ["11/20/23", 34799.0],
      ["11/21/23", 17232.0],
      ["11/22/23", 35532.0],
      ["11/23/23", 34605.0],
      ["11/24/23", 56300.0],
      ["11/25/23", 15764.0],
      ["11/26/23", 13422.0],
      ["11/27/23", 0.0],
      ["11/28/23", 24703.0],
      ["11/29/23", 21583.0],
      ["11/30/23", 13081.0],
      ["12/01/23", 18921.0],
      ["12/02/23", 0.0],
      ["12/03/23", 13299.0],
      ["12/04/23", 15676.0],
      ["12/05/23", 0.0],
      ["12/06/23", 0.0],
      ["12/07/23", 23738.0],
      ["12/08/23", 0.0],
      ["12/09/23", 0.0],
      ["12/10/23", 0.0],
      ["12/11/23", 0.0],
      ["12/12/23", 0.0],
      ["12/13/23", 0.0],
      ["12/14/23", 0.0],
      ["12/15/23", 0.0],
      ["12/16/23", 0.0],
      ["12/17/23", 0.0],
      ["12/18/23", 0.0],
      ["12/19/23", 17,837.0],
      ["12/20/23", 0.0],
      ["12/21/23", 0.0],
      ["12/22/23", 0.0],
      ["12/23/23", 0.0],
      ["12/24/23", 0.0],
      ["12/25/23", 0.0],
      ["12/26/23", 0.0],
      ["12/27/23", 0.0],
    ];

    // Example data for backers chart
    var initialBackersData = [
      ["11/07/23", 746],
      ["11/08/23", 174],
      ["11/09/23", 70],
      ["11/10/23", 25],
      ["11/11/23", 32],
      ["11/12/23", 20],
      ["11/13/23", 14],
      ["11/14/23", 18],
      ["11/15/23", 25],
      ["11/16/23", 39],
      ["11/17/23", 24],
      ["11/18/23", 36],
      ["11/19/23", 23],
      ["11/20/23", 28],
      ["11/21/23", 15],
      ["11/22/23", 22],
      ["11/23/23", 23],
      ["11/24/23", 35],
      ["11/25/23", 13],
      ["11/26/23", 11],
      ["11/27/23", 0],
      ["11/28/23", 15],
      ["11/29/23", 15],
      ["11/30/23", 10],
      ["12/01/23", 8],
      ["12/02/23", 0],
      ["12/03/23", 4],
      ["12/04/23", 1],
      ["12/05/23", 0],
      ["12/06/23", 0],
      ["12/07/23", 16],
      ["12/08/23", 0],
      ["12/09/23", 0],
      ["12/10/23", 0],
      ["12/11/23", 0],
      ["12/12/23", 0],
      ["12/13/23", 0],
      ["12/14/23", 0],
      ["12/15/23", 0],
      ["12/16/23", 0],
      ["12/17/23", 0],
      ["12/18/23", 0],
      ["12/19/23", 12],
      ["12/20/23", 0],
      ["12/21/23", 0],
      ["12/22/23", 0],
      ["12/23/23", 0],
      ["12/24/23", 0],
      ["12/25/23", 0],
      ["12/26/23", 0],
      ["12/27/23", 0],
    ];

    // Function to initialize the chart
    function initializeChart(chartId, initialData, yAxisTitle, chartType) {
      if (typeof Chartkick !== "undefined") {
        createCustomChart(chartId, initialData, yAxisTitle, chartType);
      } else {
        // Wait for the Chartkick library to be loaded
        window.addEventListener("chartkick:load", function () {
          createCustomChart(chartId, initialData, yAxisTitle, chartType);
        });
      }
    }

    // Call the initializeChart function for funding chart
    initializeChart("dailyFundingChart", initialFundingData, "Funds Raised", "funding");

    // Call the initializeChart function for backers chart
    initializeChart("dailyBackersChart", initialBackersData, "Backer Counts", "backers");

    // Function to update the chart with new data
    function updateChart(chartId, newData, chartType) {
      // Fetch or generate new data
      // ...

      // Update the chart with new data
      createCustomChart(chartId, newData, "Funds Raised", chartType); // Update the yAxisTitle accordingly
    }

    // Example usage to update funding chart
    // updateChart("dailyFundingChart", [
    //   ["09/10/23", 5000.0],
    //   ["09/11/23", 8000.0],
    //   // Add more data points as needed
    // ], "funding");

    // Example usage to update backers chart
    // updateChart("dailyBackersChart", [
    //   ["09/10/23", 500],
    //   ["09/11/23", 800],
    //   // Add more data points as needed
    // ], "backers");
  });