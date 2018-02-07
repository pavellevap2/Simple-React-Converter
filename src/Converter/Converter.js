import React from "react";
import "./Converter.css"
import arrows from "../assets/images/arrow_two_head.png";
// const debounce = require("lodash.debounce");

const currencies = ["USD", "EURO", "RUB"];

let USD_TO_CURR = {  "RUB": 57.2196, "EUR": 0.810431879 };
let EURO_TO_RUB = { "RUB" : 70.576659};

let convertToCurr = (amount, curr) => {
    return (amount * curr)
} ;

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue : "",
            outputValue : "",
            fromCurr : "",
            toCurr : "",
        }
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
           toCurr : c,
       })
    }
    makeConversion(){
       let toCurr = this.state.toCurr;
       let fromCurr = this.state.fromCurr;
       let inputVal = this.state.inputValue;

        if (toCurr === fromCurr){
            this.setState({
                outputValue : inputVal
            })
        }

        if (fromCurr === "USD" && toCurr === "EURO"){
            this.setState({
                outputValue : convertToCurr(inputVal, USD_TO_CURR.EUR) ,
            })
        } else if (fromCurr === "USD" && toCurr === "RUB"){
            this.setState({
                outputValue : convertToCurr(inputVal, USD_TO_CURR.RUB)
            })
        }

        if (fromCurr === "EURO" && toCurr === "USD"){
            this.setState({
                outputValue : 1 / convertToCurr(inputVal,USD_TO_CURR.EUR)
            })
        } else if (fromCurr === "EURO" && toCurr === "RUB"){
            this.setState({
                outputValue :  convertToCurr(inputVal , EURO_TO_RUB.RUB)
            })
        }


         if (fromCurr === "RUB" && toCurr === "USD"){
            this.setState({
                outputValue : (convertToCurr(inputVal,1 / USD_TO_CURR.RUB)).toFixed(3)
            })
        } else if (fromCurr === "RUB" && toCurr === "EURO"){
            this.setState({
                outputValue : (convertToCurr(inputVal, 1 / EURO_TO_RUB.RUB )).toFixed(3)
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
                            <input onChange ={ (e) => this.enterData(e)}  onKeyUp={()=> this.makeConversion()} type="text"/>
                    </div>
                    <div className="Сonverter_main_selection">
                        <form action="">
                            <div className="Сonverter_main_selection_select">
                                <p className='Сonverter_main_selection_from-to'>From</p>
                                <select name="Choose type">
                                    <option value="Choose currency">currencies:</option>
                                    {currencies.map(c =>
                                        <option onClick={() => this.setFromCurr(c)}>
                                            {c}
                                        </option>
                                    )}
                                </select>
                            </div>
                        </form>

                        <button>
                            <img src={arrows} alt="arrows"/>
                        </button>

                        <form action="">
                            <div className="Сonverter_main_selection_select">
                                <p className='Сonverter_main_selection_from-to'>TO</p>
                                <select name="Choose type">
                                    <option value="Choose currency">currencies:</option>
                                    {currencies.map(c =>
                                        <option onClick={() => this.setToCurr(c)}>
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
                    <p className="Converter_output_rate">{this.state.fromCurr} to {this.state.toCurr} </p>
                </div>
            </div>
        )
    }
}
export default Converter