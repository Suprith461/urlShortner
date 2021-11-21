import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({labels,data,backgroundColors,totalClicks}) => {
  return (
    <Paper
      variant="outlined"
      style={{ marginTop: "20px", marginRight: "20px", padding: "20px" }}
    >
      
      <Typography variant="button">
        <Box fontWeight="fontWeightBold">Total Clicks</Box>
      </Typography>
      <Typography variant="h6">
        <Box fontWeight="fontWeightBold" marginBottom={3}>
         {totalClicks}
        </Box>
      </Typography>
      <Doughnut
        data={{
          labels: labels,
          datasets: [
            {
              label: "number of clicks",
              data: data,
              backgroundColor: backgroundColors,
            },
          ],
        }}
        options={{
          responsive: true,
          cutoutPercentage: 60,
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 10,
            },
          },
          layout: {
            padding: {
              top: 10,
            },
          },
          onHover: function (evt, elements) {
            let segment;
            if (elements && elements.length) {
              segment = elements[0];
              this.chart.update();
              segment._model.outerRadius += 10;
              segment._model.innerRadius = 0;
              console.log();
            } else {
              if (segment) {
                segment._model.outerRadius -= 10;
              }
              segment = null;
            }
          },
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  offsetGridLines: true,
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  beginAtZero: true,
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </Paper>
  );
};

export default DoughnutChart;
