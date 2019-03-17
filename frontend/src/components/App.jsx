import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import {NavigationBar, PageContainer} from './layout';
import ExpenseAdd from './expense/Add';

const App = () => (
    <Router>
        <div>
            <NavigationBar />
            <PageContainer>
                <Route
                    exact
                    path='/'
                    component={ExpenseAdd} />
            </PageContainer>
        </div>
    </Router>
);

export default App;
