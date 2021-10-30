import React from 'react';
import { Link } from 'react-router-dom';
import One from './one.js';
import LineChart from './LineChart.js';

class Analysis extends React.Component{

    componentDidMount () {
    }
    
    render(){
        console.log("now display analysis");

        //受け取るデータ
        var input_dataset = this.props.model.dayStacks;
        //データの成形(直近10件表示(一番左または月初の場合は月も表示))
        var dataset = []
        for (let step = Math.max(0,input_dataset.length-10); step < input_dataset.length; step++) {
            var data = input_dataset[step]
            if (step==Math.max(0,input_dataset.length-10)||(data.date[4]=='0'&&data.date[5]=='1')){
                data.date = data.date[2]+data.date[3]+'/'+data.date[4]+data.date[5]
            }else{
                data.date = data.date[4]+data.date[5]
            }
            dataset.push(data)
        }

        return (
            <div class="barchart">
                <h2>React D3.js line chart</h2>
                <LineChart  dataset={dataset} />
            </div>
        )
    }
}

export default Analysis;