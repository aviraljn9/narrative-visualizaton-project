import React, { Component } from 'react'
import * as d3 from "d3";

export class Chart extends Component {
    constructor(props) {
        super(props);
        this.svgRef = React.createRef();

        this.state = {
            'year': 1800
        }
        this.setyear =this.setyear.bind(this);
    }    

    updatechart()
    {
        const year_income = this.incomedata.map(
            (x) => {                 
                let cm_country = this.cm_data.find(y => y.country === x.country);
                if (cm_country === undefined) {
                    return null;
                }
                if (isNaN(x[this.state.year]) || isNaN(cm_country[this.state.year]))
                {
                    return null;
                }
                return {'country': x.country, 'income': x[this.state.year], 'child_mortality': cm_country[[this.state.year]]} 
            }
        )
        console.log(year_income);

        const scalex = d3.scaleLog()
        .domain([200,179000])
        .range([0,700])
        const scaley = d3.scaleLinear()
        .domain([0,1000])
        .range([700,0])

        d3.select('#scatter').html("");
        d3.select('#scatter').append('g')
        .attr('transform','translate(50,50)')
        .selectAll('circle')
        .data(year_income)
        .enter()
        .append('circle')
        .attr('cx',function(d,i) { return scalex(d.income); })
        .attr('cy',function(d,i) { return scaley(d.child_mortality); })
        .attr('r',function(d,i) { return 2; })
    
        d3.select('#scatter').append('g')
        .attr('transform','translate(50,50)')
        .call(
            d3.axisLeft(scaley)
            // .tickValues([10,100,1000,10000, 100000])
            .tickFormat(d3.format("~s"))
        )
        d3.select('svg').append('g')
        .attr('transform','translate(50,750)')
        .call(
            d3.axisBottom(scalex)
            .tickValues([300,1000,3000,10000, 30000, 100000])
            .tickFormat(d3.format("~s"))
        )
        
    }

    async componentDidMount()
    {
        this.incomedata = await d3.csv('/income_processed.csv');
        // console.log(this.incomedata);
        this.cm_data = await d3.csv('/child_mortality_0_5_year_olds_dying_per_1000_born.csv');
        // console.log(this.cm_data);

        this.updatechart();
        
    }

    componentDidUpdate()
    {
        this.updatechart();
    }

    setyear(event)
    {
        this.setState({'year': event.target.value});
    }

    render() {
        return (
            <div>
                <form>
                    <label for="year">Please select a year: </label>
                    <input type="range" min={1800} max={2040} step={1} id="year" value={this.state.year} onInput={this.setyear} />
                    <output name="selected_year" id="selected_year">{this.state.year}</output>
                </form>

                <svg id='scatter' width={800} height={800} ref = {this.svgRef}>

                </svg>
            </div>
        )
    }
}

export default Chart
