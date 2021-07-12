import './main.css';
import Card from './components/Card';
import Card2 from './components/Card2'
import {Container, Row} from "reactstrap";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LifeCycleMethods from "./components/LifeCycleMethods";
import ProductPage from "./components/ProductPage";
import NavigationBar from "./components/NavigationBar";
import Trello from "./components/Trello";
import Wrap from "./components/Wrap";
import Posts from "./components/Posts";
import PostView from "./components/PostView";
import Plugins from "./components/Plugins";
import {ToastContainer} from "react-toastify";
import Hooks from "./components/Hooks";
import Flickr from "./components/Flickr";

function App() {
    return (
        <div>
            <BrowserRouter>
                <ToastContainer/>

                <NavigationBar/>

                <Switch>
                    <Route exact path='/' component={LifeCycleMethods}/>
                    <Route exact path='/products' component={ProductPage}/>
                    <Route exact path='/trello' component={Trello}/>
                    <Route exact path='/counter' component={Wrap}/>
                    <Route exact path='/posts' component={Posts}/>
                    <Route exact path='/posts/:id' component={PostView}/>
                    <Route exact path='/plugins' component={Plugins}/>
                    <Route exact path='/hooks' component={Hooks}/>
                    <Route path='/flickr' component={Flickr}/>


                </Switch>

            </BrowserRouter>
        </div>

    );
}


export default App;