import React, { Component } from 'react'
// import * as d3 from 'd3';

class LineChart extends Component {
  constructor(props){
    super(props)
    this.createLineChart = this.createLineChart.bind(this)
  }

  componentDidMount() {
    this.createLineChart()
  }
  componentDidUpdate() {
    this.createLineChart()
  }

  createLineChart() {

    // const _self = this;
    // const node = this.node;

    // var width = 900; // グラフの幅
    // var height = 600; // グラフの高さ
    // var padding = 36; // スペース設定　
    
    // // SVGの設定
    // var svg = d3.select(node).append("svg").attr("width", width).attr("height", height);

    // // 軸スケールの設定
    // var xScale = d3.scaleBand()
    //                 .rangeRound([padding, width - padding])
    //                 .padding(0.2)
    //                 .domain(this.props.dataset.map(function(d) { return d.date; }));

    // var yScale = d3.scaleLinear()
    //                 .domain([0, d3.max(this.props.dataset, function(d) { return 100; })])
    //                 .range([height - padding, padding]);

    // // 軸の描画
    // svg.append("g")
    //     .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
    //     .call(d3.axisBottom(xScale).tickSizeInner(0))
    //     .attr("class", "x-axis");

    // svg.append("g")
    //     .attr("transform", "translate(" + padding + "," + 0 + ")")
    //     .call(d3.axisLeft(yScale).tickSizeInner(-width+padding*2))
    //     .attr("class", "y-axis");
        
    // //凡例の準備
    // const legend = svg.append("g")
    //                 .attr("class", "legend")
    //                 .attr("transform", "translate(10, 10)");
        
    // const legendRow = legend.append("g");
    // //a_percentageの凡例
    // legendRow.append("rect")
    //             .attr("x", 0)
    //             .attr("y", 0)
    //             .attr("width", 10)
    //             .attr("height", 6)
    //             .attr("fill", "#00bfff");
    // legendRow.append("text")
    //             .attr("x", 11)
    //             .attr("y", 5)
    //             .attr("fill", "#000000")
    //             .attr("text-anchor", "top")
    //             .attr("font-family", "Tazugane Info Std N")
    //             .attr("font-weight", 500)
    //             .attr("font-size", "10px")
    //             .text("sample1");
    // //b_percentageの凡例
    // legendRow.append("rect")
    //             .attr("x", 69)
    //             .attr("y", 0)
    //             .attr("width", 10)
    //             .attr("height", 6)
    //             .attr("fill", "	#00FF00");
    // legendRow.append("text")
    //             .attr("x", 80)
    //             .attr("y", 5)
    //             .attr("fill", "#000000")
    //             .attr("text-anchor", "top")
    //             .attr("font-family", "Tazugane Info Std N")
    //             .attr("font-weight", 500)
    //             .attr("font-size", "10px")
    //             .text("sample2");
    // //c_percentageの凡例
    // legendRow.append("rect")
    //             .attr("x", 138)
    //             .attr("y", 0)
    //             .attr("width", 10)
    //             .attr("height", 6)
    //             .attr("fill", "	#ea5550");
    // legendRow.append("text")
    //             .attr("x", 149)
    //             .attr("y", 5)
    //             .attr("fill", "#000000")
    //             .attr("text-anchor", "top")
    //             .attr("font-family", "Tazugane Info Std N")
    //             .attr("font-weight", 500)
    //             .attr("font-size", "10px")
    //             .text("sample3");

    // // 棒グラフの描画
    // svg.append("g")
    //     .selectAll("rect")
    //     .data(this.props.dataset)
    //     .enter()
    //     .append("rect")
    //     .attr("x", function(d) { return xScale(d.date); })
    //     .attr("y", function(d) { return yScale(d.a_percentage); })
    //     .attr("width", xScale.bandwidth()/3)
    //     .attr("height", function(d) { return height - padding - yScale(d.a_percentage); })
    //     .attr("fill", "#00bfff");
    // svg.append("g")
    //     .selectAll("rect")
    //     .data(this.props.dataset)
    //     .enter()
    //     .append("rect")
    //     .attr("x", function(d) { return xScale(d.date)+xScale.bandwidth()/3; })
    //     .attr("y", function(d) { return yScale(d.b_percentage); })
    //     .attr("width", xScale.bandwidth()/3)
    //     .attr("height", function(d) { return height - padding - yScale(d.b_percentage); })
    //     .attr("fill", "	#00FF00");
    // svg.append("g")
    //     .selectAll("rect")
    //     .data(this.props.dataset)
    //     .enter()
    //     .append("rect")
    //     .attr("x", function(d) { return xScale(d.date)+xScale.bandwidth()*2/3; })
    //     .attr("y", function(d) { return yScale(d.c_percentage); })
    //     .attr("width", xScale.bandwidth()/3)
    //     .attr("height", function(d) { return height - padding - yScale(d.c_percentage); })
    //     .attr("fill", "	#ea5550");

    // function xStart(){ return margin;}        
    // function yStart(){ return height - margin;}
    // function xEnd(){ return width - margin;}
    // function yEnd(){ return margin;}
    // function quadrantWidth(){ return width - 2 * margin;}
    // function quadrantHeight(){ return height - 2 * margin;} 
  }

  render() {
    // return <svg ref={node => this.node = node}>
    // </svg>
  }
}

export default LineChart