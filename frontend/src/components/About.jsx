import React, {Component} from 'react';

import Dogs from './Dogs';

export default class About extends Component {
    render() {
        return (
            <div>
                <h2>About</h2>

                <Dogs />
            </div>
        );
    }
} 