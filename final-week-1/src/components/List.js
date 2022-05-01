import React from "react";
import "../style.scss";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.index);
    }

    render() {
        return (
            <div className="list__wrapper">
                <li className="list__item">{this.props.item}</li>
                <button className="list__btn" type="button" onClick={this.handleDelete}>刪除</button>
            </div>
        );
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.items.map((item, i) =>
                    <Item item={item} key={i} index={i} onDelete={this.props.onDelete} />
                )}
            </ul>
        );
    }
}

export default List;