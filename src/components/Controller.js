import React, { Component } from 'react'
import Chart from './Chart.js';
import Plot from './Plot.js';

export class Controller extends Component {
    constructor(props) {
        super(props);
        this.svgRef = React.createRef();

        this.state = {
            'scene': 1
        }
        this.setscene = this.setscene.bind(this);
    }    

    setscene()
    {
        // clearInterval(this.timerID);
        // this.timerID = null;
        this.setState({'scene': (this.state.scene + 1) % 2});

    }
    
    render() {
        if (this.state.scene == 1) {
            return (
                <div>
                    <button onClick={this.setscene}>Change</button>
                    <Plot />
                </div>
            )          
        } else {
            return (
                <div>
                    <button onClick={this.setscene}>Change</button>
                    <Chart />
                </div>
            )
        }
    }
}

export default Controller
