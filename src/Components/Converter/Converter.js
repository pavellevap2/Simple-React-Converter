import React from "react";
import "../../assets/styles/Converter.css"
import arrow from "../../assets/images/arrow_top.png";
const debounce = require("lodash.debounce");

let USD_TO_CURR = { "USD": 1 , "RUB": 57.2409845 , "EURO": 0.814358774 , };

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
            this.convertDebounced = debounce(() => this.convert(), 2000)
    }

    enterData(e){
        this.setState({
            inputValue : e.target.value
        })
    }

    convert() {
        let inVal = this.state.inputValue;
        let fromCurr = this.state.fromCurr;
        let toCurr = this.state.toCurr;

        let rate = fromCurr == "USD"
            ? USD_TO_CURR[toCurr]
            : USD_TO_CURR[toCurr] / USD_TO_CURR[fromCurr];
        this.setState({
            outputValue: inVal * rate,
            rate,
        })
    }

    render() {
        return(
            <div className="Converter">
                <h1 className="Converter__title">Simple Converter </h1>

                <div className="Converter__b-main">
                    <h3 className="Converter__b-main__title">Enter a number to convert</h3>

                    <div className="Converter__b-main__input-form">
                            <input onChange ={ (e) => this.enterData(e)}  onKeyUp={ ()=> this.convertDebounced()}
                                   type="text" className="Converter__b-main__input-form__input"/>
                        <button className="Converter__b-main__input-form__btn" onClick={() => this.convert()}>
                            ↻
                        </button>
                    </div>

                    <div className="Converter__b-main__selection-form">
                        <form action="">
                                <p className='Converter__b-main__selection-form__caption'>From</p>
                                <select name="Choose type" className="Converter__b-main__selection-form__select">
                                    <option value="Choose currency">currencies:</option>
                                    {Object.keys(USD_TO_CURR).sort().map( (c, i) =>
                                        <option key={i} onClick={ (x) => this.setState({fromCurr:c})}>
                                            {c}
                                        </option>
                                    )}
                                </select>
                        </form>

                        <img src={arrow} alt="arrows" className="Converter__b-main__selection-form__img"/>

                        <form action="">
                                <p className='Converter__b-main__selection-form__caption'>TO</p>
                                <select name="Choose type " className="Converter__b-main__selection-form__select">
                                    <option value="Choose currency">currencies:</option>
                                    {Object.keys(USD_TO_CURR).sort().map( (c, i) =>
                                        <option key={i} onClick={ (x)=> this.setState({toCurr: c})}>
                                            {c}
                                        </option>
                                    )}
                                </select>
                        </form>
                    </div>

                </div>

                <div className="Converter__b-output">
                    <p className="Converter__b-output__value" >Conversion: {this.state.outputValue}</p>
                    <p className="Converter__b-output__rate">{this.state.fromCurr} equal : {this.state.rate}</p>
                </div>

            </div>
        )
    }
}
export default Converter;