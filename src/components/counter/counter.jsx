import React, {Component} from "react";
import "./counter.css";
import Controls from "./Controls";

class Counter extends Component {
    static defaultProps = {
    initialValue: 0
}
    state = {
        value: this.props.initialValue
    };

    handleIncrement = () => {
        // this.setState({
            // value: 10 ,
                           ///обьектная форма, только для перезаписи от предыдущего не работает
        // });
        this.setState((prevState) => ({ value: prevState.value + 1 }));
    //     const { target } = e
    // setTimeout(() => console.log(target), 5000)   в асинхроном коде нужно сохранять событие 
    };
  
    handleDecrement = () => { 
        this.setState((prevState) => ({value: prevState.value - 1}));
    };
    render() {
    return(
            <div className="Counter">
            <span className="Counter__value">{ this.state.value }</span>
            <Controls onIncrement={this.handleIncrement}
                      onDecrement={this.handleDecrement} />
            </div>
        );
    
    };  
};


// const Counter = () => {
//     return (<div className="Counter">
//         <span className="Counter__value"></span>
//         <div className="Counter__controls">
//             <button type="button">+1</button>
//             <button type="button">-1</button>
//         </div>
//     </div>);
// };

export default Counter