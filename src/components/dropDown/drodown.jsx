import { Component } from "react";
import "./dropdown.css"

// class Dropdown extends Component {
//     state = {
//     visible: false
//     }
    
//     show = () => {
//         this.setState({ visible: true })
//     };
//     hide = () => {
//         this.setState({visible: false})
//     }

//     render() {
//         return (
//             <div className="Dropdown">
//                 <button type="button" className="Dropdown__toggle" onClick={this.show}>
//                     Показать
//                 </button>
//                   <button type="button" className="Dropdown__toggle" onClick={this.hide}>
//                     Hide
//                 </button>
//                 {this.state.visible && <div className="Dropdown__menu">Выпадающее окно</div>}
                
//             </div>
//         );
//     };
// };

//////////////////////////////////toggle////////////////////////////

class Dropdown extends Component {
    state = {
    visible: false
    }
    
    toggle = () => {
        this.setState(prev => ({
            visible: !prev.visible
        }));
    };
    render() {
        return (
            <div className="Dropdown">
                <button type="button" className="Dropdown__toggle" onClick={this.toggle}>
                  {this.state.visible ? "HIDE" : "SHOW"}
                </button>
               
                {this.state.visible && (<div className="Dropdown__menu">Выпадающее окно</div>)}
                
            </div>
        );
    };
};

export default Dropdown