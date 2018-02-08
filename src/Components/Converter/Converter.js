import React from "react";
import "./Converter.css"
import arrow from "../../assets/images/arrow_top.png";
const debounce = require("lodash.debounce");

const currencies = ["USD", "EURO", "RUB"];
let USD_TO_CURR = { "USD": 1 , "RUB": 57.2409845 , "EURO": 0.814358774};

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue : "",
            outputValue : "",
            fromCurr : "",
            toCurr : "",
            rate : ""
        };
            this.makeConversion = debounce(this.makeConversion.bind(this) , 2000)
    }

    enterData(e){
        this.setState({
            inputValue : e.target.value
        })
    }

    setFromCurr(c){
        this.setState({
            fromCurr : c ,
        })
    }
    setToCurr(c) {
       this.setState({
           toCurr : c ,
       })
    }

    makeConversion() {
        let inVal = this.state.inputValue;
        let fromCurr = this.state.fromCurr;
        let toCurr = this.state.toCurr;

        if (fromCurr === "USD") {
            this.setState({
                outputValue: inVal * USD_TO_CURR[toCurr],
                rate :  USD_TO_CURR[toCurr] ,
            })
        } else {
            this.setState({
                outputValue : (USD_TO_CURR[toCurr] / USD_TO_CURR[fromCurr]) * inVal ,
                rate : (USD_TO_CURR[toCurr] / USD_TO_CURR[fromCurr]) ,
            })
        }
    }

    render() {

        return(
            <div className="Converter">
                <h1 className="Converter_title">Simple Converter </h1>

                <div className="Converter_main">
                    <h3 className="Converter_instruction">Enter a number to convert</h3>
                    <div className="Converter_main_input">
                            <input onChange ={ (e) => this.enterData(e)}  onKeyUp={ this.makeConversion}
                                   type="text"/>
                        <button className="Converter_main_input_reboot" onClick={this.makeConversion}>
                            ↻
                        </button>

                    </div>
                    <div className="Сonverter_main_selection">
                        <form action="">
                            <div className="Сonverter_main_selection_select">
                                <p className='Сonverter_main_selection_from-to'>From</p>
                                <select name="Choose type">
                                    <option value="Choose currency">currencies:</option>
                                    {currencies.map( (c, i) =>
                                        <option key={i} onClick={() => this.setFromCurr(c)}>
                                            {c}
                                        </option>
                                    )}
                                </select>
                            </div>
                        </form>
                        <img src={arrow} alt="arrows"/>
                        <form action="">
                            <div className="Сonverter_main_selection_select">
                                <p className='Сonverter_main_selection_from-to'>TO</p>
                                <select name="Choose type">
                                    <option value="Choose currency">currencies:</option>
                                    {currencies.map( (c, i) =>
                                        <option key={i} onClick={() => this.setToCurr(c)}>
                                            {c}
                                        </option>
                                    )}
                                </select>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="Converter_output">
                    <p className="Converter_output_value" >Conversion: {this.state.outputValue}</p>
                    <p className="Converter_output_rate">{this.state.fromCurr} equal {this.state.rate}</p>
                </div>

            </div>
        )
    }
}
export default Converter