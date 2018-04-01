import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuidv1 from 'uuid/v1';
import {addArticle} from './../action';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    handleChange(evt) {
        this.setState({
            [evt.target.id]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const {title} = this.state;
        const id = uuidv1();
        this.props.addArticle({title, id});
        this.setState({title: ''});
    }
    render() {
        const {title} = this.state;
        return (
            <div>
                <h2>About</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange.bind(this)}
                    />
                    <button type='submit'>Save</button>
                </form>
            </div>
        );
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

const About = connect(null, mapDispatchToProps)(Form);

export default About;