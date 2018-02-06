import React from "react";
import "./Converter.css"
import arrows from "../assets/images/arrow_two_head.png";

class Converter extends React.Component{
    render() {
        return(
            <div className="Converter">
                <h1 className="Converter_title">Simple Converter</h1>

                <div className="Converter_main">
                    <h3 className="Converter_instruction">Enter a number to convert</h3>
                    <div className="Converter_main_input">
                        <input type="text"/>
                    </div>
                    <div className="Сonverter_main_selection">
                        <form action="">
                            <p className="Сonverter_main_selection_select">
                                <p className='Сonverter_main_selection_from-to'>From</p>
                                <select name="" id="">
                                    <option value="">test</option>
                                    <option value="">test</option>
                                    <option value="">test</option>
                                </select>
                            </p>
                        </form>

                        <button>
                            <img className="Сonverter_main_selection_arrows" src={arrows} />
                        </button>

                        <form action="">
                            <p className="Сonverter_main_selection_select">
                                <p className="Сonverter_main_selection_from-to">To</p>
                                <select name="" id="">
                                    <option value="">test</option>
                                </select>
                            </p>
                        </form>
                    </div>
                    <div className="Converter_main_convert">
                        <button>Convert</button>
                    </div>
                </div>
                <div className="Converter_output">
                    <p className="Converter_output_value">63.242</p>
                    <p className="Converter_output_rate">1 usd equlas 53.50</p>
                </div>

            </div>
        )
    }
}
export default Converter