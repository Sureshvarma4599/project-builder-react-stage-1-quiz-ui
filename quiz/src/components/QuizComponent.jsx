import React, { Component } from 'react'
import './style.css';
export default class QuizComponent extends Component {
    render() {
        return (
            <div>
               <div className="quiz">
                   <div className="qs">
                   <h1>Question</h1>
                   <p>which is the mammal which can't jump ?</p>
                   <div className="answer">
                       <div className='option'>dog</div><br/>
                       <div className='option'>goat</div><br/>
                     
                   </div><br/>
                   <div className="answer">
                   <div className='option'>elephant</div><br/>
                       <div className='option'>lion</div>
                   </div>
                   <br/>
                   <div className="button">
                   <button className="b1"> previous</button>
                   <button className="b2">next</button>
                   <button className="b3">quit</button>
                   </div>
                   </div>
                   </div> 
            </div>
        )
    }
}
