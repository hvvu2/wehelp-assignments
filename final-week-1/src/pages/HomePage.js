import React from "react";
import {Link} from "react-router-dom";
import "../style.scss";

class HomePage extends React.Component {
    render() {
        return (
            <div className="home">
                <h1 className="home__title">React 待辦清單練習專案</h1>
                <p className="home__txt">歡迎來到首頁</p>
                <Link className="home__link" to="/list">開始使用待辦清單</Link>
            </div>
        );
    }
}

export default HomePage;