import React from 'react';
import { Link } from 'react-router-dom';
import One from './one.js';

class Two extends React.Component{
    render(){
        console.log("now display two");
        return (
            <div>
                test_two<br/>
                <Link to='/'>oneへ</Link>
            </div>
        )
    }
}

export default Two;