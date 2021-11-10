'use strict';

const { getChart } = require("./get-chart");

module.exports.getChart = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: getChart(JSON.parse(event.body)),
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
