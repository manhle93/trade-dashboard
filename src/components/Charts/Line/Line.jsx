import React from "react";
import Chart from "react-apexcharts";
class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
      ],
      options: {
        theme: {
          mode: "dark",
        },
        chart: {
          id: "fb",
          group: "social",
          type: "line",
          height: 160,
        },
        colors: ["#008FFB"],
        yaxis: {
          labels: {
            minWidth: 40,
          },
        },
      },

      seriesLine2: [
        {
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 30,
            }
          ),
        },
      ],
      optionsLine2: {
        theme: {
          mode: "dark",
        },
        chart: {
          id: "tw",
          group: "social",
          type: "line",
          height: 160,
        },
        colors: ["#546E7A"],
        yaxis: {
          labels: {
            minWidth: 40,
          },
        },
      },

      seriesArea: [
        {
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
      ],
      optionsArea: {
        theme: {
          mode: "dark",
        },
        chart: {
          id: "yt",
          group: "social",
          type: "area",
          height: 160,
        },
        colors: ["#00E396"],
        yaxis: {
          labels: {
            minWidth: 40,
          },
        },
      },
    };
    function generateDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = baseval;
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
      }
      console.log(1, series);
      return series;
    }
  }

  render() {
    return (
      <div className="app">
        <br />

        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              height="180"
            />
          </div>
        </div>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.optionsLine2}
              series={this.state.seriesLine2}
              type="line"
              height="180"
            />
          </div>
        </div>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.optionsArea}
              series={this.state.seriesArea}
              type="area"
              height="180"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Line;
