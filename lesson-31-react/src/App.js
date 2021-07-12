import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import './main.css';
import Information from "./pages/Information";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/information" component={Information}/>
                    <Route exact path="/login" component={Login}/>


                </Switch>


            </BrowserRouter>
        </div>
    );
}

export default App;
