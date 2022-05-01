import React from "react";
import {Link} from "react-router-dom";
import AddForm from "../components/AddForm";
import List from "../components/List";
import "../style.scss";

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit(item) {
        this.setState({items: [...this.state.items, item]});
    }

    handleDelete(index) {
        this.state.items.splice(index, 1);
        this.setState({items: this.state.items});
    }

    render() {
        return (
            <div className="list">
                <AddForm onSubmit={this.handleSubmit} />
                <List items={this.state.items} onDelete={this.handleDelete} />
                <Link className="list__link" to="/">回到首頁</Link>
            </div>
        );
    }
}

export default ListPage;