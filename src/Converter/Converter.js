import React from "react";
import "./Converter.css"
import arrows from "../assets/images/arrow_two_head.png";
// const debounce = require("lodash.debounce");

const currencies = ["USD", "EURO", "RUB", "CNY"];

const rate = {
    "USD": {"RUB" : 57.2196, "EURO" : 0.810431879 ,"CNY" : 6.26919942 },
    "EURO": {"USD" : 1.23391, "RUB" : 70.6302232 ,"CNY" : 7.73562786 },
    "RUB": {"USD" : 0.01747, "EURO" : 0.0141582449 ,"CNY" : 0.109522914 },
    "CNY": {"USD" : 0.15951, "EURO" : 0.129271989  ,"RUB" : 9.13050944 },
};

let convertToCurr = (amount, curr) => {
    return (amount * curr).toFixed(4)
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
           toCurr : c
       })
    }
    makeConversion(){
        if(this.state.fromCurr === "USD" && this.state.toCurr === "RUB"){
            this.setState({
                outputValue : convertToCurr(this.state.inputValue, rate.USD.RUB)
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
                    <p className="Converter_output_rate">1 equals </p>
                </div>
            </div>
        )
    }
}
export default Converter