import React from "react";
import "../style.scss";


class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: "測試項目"
        };
        this.clearTxt = this.clearTxt.bind(this);
        this.handleTxtChange = this.handleTxtChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    clearTxt() {
        this.setState({txt: ""});
    }

    handleTxtChange(e) {
        this.setState({txt: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.txt) {
            this.props.onSubmit(this.state.txt);
            this.setState({txt: ""});
        }
    }

    render() {
        return (
            <form className="item-form" onSubmit={this.handleSubmit}>
                <input className="item-form__input" type="text" value={this.state.txt} onFocus={this.clearTxt} onChange={this.handleTxtChange} />
                <input className="item-form__btn" type="submit" value="新增" />
            </form>
        ); 
    }
}

export default AddForm;