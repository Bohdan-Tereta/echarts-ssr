const echarts = require("echarts");
const { createCanvas } = require("canvas");
const { JSDOM } = require("jsdom");

module.exports.getChart = function getChart(option) {
  echarts.setCanvasCreator(() => {
    return createCanvas(200, 200);
  });
  const { window } = new JSDOM();
  global.window = window;
  global.navigator = window.navigator;
  global.document = window.document;
  
  const root = document.createElement("div");
  Object.defineProperty(root, "clientWidth", { value: 500 });
  Object.defineProperty(root, "clientHeight", { value: 500 });
  root.style.cssText = "width: 500px; height: 500px;";
  
  const chart = echarts.init(root, null, {
    renderer: "svg",
  });
  chart.setOption(option || {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        animation: false,
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
  
  const svg =  root.querySelector("svg").outerHTML;
  
  chart.dispose();

  return svg;
}
