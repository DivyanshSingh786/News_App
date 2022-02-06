import React, { Component } from 'react';
import loading from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img className='my-3' src={loading} style={{height: "20px"}} alt="loading" />
            </div>
        );
    }
}

export default Spinner