import { Component } from "react";
import "./colorPicker.css"

// const ColorPicker = ({ options }) => (
//     <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <div>
//             {
//                 options.map(({ label, color }) => (
//                     <span key={label}
//                         className="ColorPicker__option"
//                         style={{ backgroundColor: color }}
//                     ></span>
//                 ))};
//         </div>
//     </div>
   
    
// );

// class ColorPicker extends Component {
//     state = {
//     activeOptionIdx: 0
// }

//     render() {
//         return (
//             <div className="ColorPicker">
//                 <h2 className="ColorPicker__title">Color Picker</h2>
//                 <div>
//                     {
//                         this.props.options.map(({ label, color }, index) => (
//                             <button type="button" key={label}
//                                 className="ColorPicker__option"
//                                 style={{
//                                     backgroundColor: color,
//                                     border: index === this.state.activeOptionIdx ? "5px solid black" : "none"
//                                 }}
//                             ></button>
//                         ))};
//                 </div>
//             </div>
//         );
//     };
// };

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 0
    };
    setActiveIndex = (index) => {
        this.setState({
            activeOptionIdx: index
        })
    }

    makeOptionClassName = (index) => {
        const optionClasses = ["ColorPicker__option"];
        if (index === this.state.activeOptionIdx) {
            optionClasses.push("ColorPicker__option--active")
            return optionClasses.join(` `)
        };
    };

    render() {
        const { activeOptionIdx } = this.state;
        const {options} = this.props
        const {label} = options[activeOptionIdx]
        // const {label} = this.props.options[this.state.activeOptionIdx]
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <p>Color: { label }</p>
                <div>
                    {
                        this.props.options.map(({ label, color }, index) => {
                          const optionClassName = this.makeOptionClassName(index)
                            return (
                                <button type="button"
                                    onClick={() => this.setActiveIndex(index)}
                                    key={label}
                                className={optionClassName}
                                    style={{
                                        margin: "4px",
                                        width: "40px",
                                        height: "40px",
                                        backgroundColor: color,
                                }}
                            ></button>
                           )
                        })}
                </div>
            </div>
        );
    };
};

export default ColorPicker