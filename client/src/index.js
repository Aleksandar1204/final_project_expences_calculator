import React from 'react';
import ReactDOM from 'react-dom';




import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'
import './assets/css/shared.css'

ReactDOM.render(<App />, document.getElementById('root'));

const Routes = () => {
    return (
        <Router>
            
            <Switch>
                
                
                <Route exact path='/newproduct' render={() => <NewProduct component={Newproduct}/>}/>
                
            </Switch>
        </Router>
    )
}


ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>, app)
