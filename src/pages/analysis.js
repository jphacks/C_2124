import React from 'react';
import { Link } from 'react-router-dom';
import One from './one.js';

class Analysis extends React.Component{
    render(){
        console.log("now display analysis");
        return (
            <div>
                test_two<br/>
                {this.props.model.test}
{/* {this.props.model.dayStacks} で参照が出来ます*/}
            </div>
        )
    }
}

export default Analysis;