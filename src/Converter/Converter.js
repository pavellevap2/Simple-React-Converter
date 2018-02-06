import React from "react";
import "./Converter.css"
import arrows from "../assets/images/arrow_two_head.png";
var debounce = require("lodash.debounce");

let toUSD = (rub) => {
    return (rub * 0.01752).toFixed(4)

}
let toRUB = (usd) =>{
    return (usd * 57.077).toFixed(4)
}

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            USDtoRUB :   {id :1, currencies:"USD to RUB"},
            RUBtoUSD :   { id :2, currencies:"RUB to USD"},
            currency : {money : "" , costs : ""},
            fromTo :"",
            value: "",

        };

       this.makeRubToUSd = this.makeRubToUSd.bind(this);
        this.makeUSdToRub = this.makeUSdToRub.bind(this);
        this.makeConversion = this.makeConversion.bind(this);
    }

    makeUSdToRub(){
            this.setState({
                fromTo : this.state.USDtoRUB.id,
                currency : {money:"RUB" , costs : "0.01759"}
            })
    }
    makeRubToUSd(){
        this.setState({
                fromTo : this.state.RUBtoUSD.id,
                currency : {money:"USD" , costs : "57.077"}
            })
    }
    makeConversion(event){
        if (this.state.fromTo === this.state.USDtoRUB.id){
            this.setState({
                value : toRUB(event.target.value)
            })
        } else if (this.state.fromTo === this.state.RUBtoUSD.id){
            this.setState({
                value : toUSD(event.target.value)
            })
        }
    }

    render() {
        return(
            <div className="Converter">
                <h1 className="Converter_title">Simple Converter</h1>

                <div className="Converter_main">
                    <h3 className="Converter_instruction">Enter a number to convert</h3>
                    <div className="Converter_main_input">
                            <input  onChange={debounce(this.makeConversion, 250,{"maxWait" : 2000})}  type="text"/>
                    </div>
                    <div className="Сonverter_main_selection">
                        <form action="">
                            <p className="Сonverter_main_selection_select">
                                <p className='Сonverter_main_selection_from-to'>From...TO</p>
                                <select name="Choose type">
                                    <option value="">Choose type : </option>
                                    <option
                                        value={this.state.USDtoRUB.currencies} onClick={this.makeUSdToRub}>{this.state.USDtoRUB.currencies}
                                    </option>
                                    <option
                                        value={this.state.RUBtoUSD.currencies} onClick={this.makeRubToUSd}>{this.state.RUBtoUSD.currencies}
                                    </option>
                                </select>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="Converter_output">
                    <p className="Converter_output_value">Conversion:{this.state.value}</p>
                    <p className="Converter_output_rate">1 {this.state.currency.money} equals {this.state.currency.costs}</p>
                </div>

            </div>
        )
    }
}
export default Converter