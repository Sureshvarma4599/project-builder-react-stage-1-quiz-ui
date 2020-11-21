import React, { Component } from 'react'
import './style.css'
export default class ResultComponent extends Component {
    render() {
        return (
            <div className="result">
                <h1>Result</h1>
                <p>your score is 20%</p>
                 <button>playAgain</button>
                 <button>exit</button>
            </div>
        )
    }
}
