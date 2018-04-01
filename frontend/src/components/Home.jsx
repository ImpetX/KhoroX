import React from 'react';
import {connect} from 'react-redux';

const List = ({articles}) => {
    return (
        <div>
            <h2>Home</h2>
            <ul>
                {articles.map(el => (
                    <li key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
};

const Home = connect(mapStateToProps)(List);

export default Home;