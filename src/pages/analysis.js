import React from 'react';
import { Link } from 'react-router-dom';
import One from './one.js';

class Analysis extends React.Component{
    render(){
        return (
            <div>
                test_two<br/>
                <Link to='/'>oneへee</Link>
            </div>
        )
    }
}

export default Analysis;