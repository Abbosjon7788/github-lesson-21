import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App3 from "../components_3/App3";
import App2 from "../components_2/App2";
import NavigationBar from "./NavigationBar";
import Trello from "../trello/Trello";
import ExtraLearning from "../extra-learning/ExtraLearning";
import Posts from "./Posts";
import PostView from "./PostView";
import UserMenu from "./UserMenu";
import Plugins from "./Plugins";
import {ToastContainer} from "react-toastify";
import Hooks from "./Hooks";
import Flickr from "./Flickr";
import Mountain from "./Mountain";
import Beaches from "./Beaches";
import Birds from "./Birds";
import Food from "./Food";
import DrawSearch from "./DrawSearch";
import CounterRedux from "./CounterRedux";


function App() {
    return (
        <div>
            {/*hammasi BrowserRouter ni ichida bolishi kk*/}
            <BrowserRouter>
                <ToastContainer/>

                <NavigationBar/>

                <Switch>

                    <Route exact path="/" component={App3}/>
                    <Route exact path="/products" component={App2}/>
                    <Route exact path="/trello" component={Trello}/>
                    <Route exact path="/extra-learning" component={ExtraLearning}/>
                    <Route exact path="/posts" component={Posts}/>
                    <Route exact path="/posts/:id" component={PostView}/>
                    <Route exact path="/users/:userID" component={UserMenu}/>
                    <Route exact path="/plugins" component={Plugins}/>
                    <Route exact path="/hooks" component={Hooks}/>
                    <Route exact path="/flickr" component={Flickr}/>
                    {/*<Route exact path="/flickr/mountains" component={Mountain}/>*/}
                    <Route exact path="/flickr/mountain" component={Mountain}/>
                    <Route exact path="/flickr/beaches" component={Beaches}/>
                    <Route exact path="/flickr/birds" component={Birds}/>
                    <Route exact path="/flickr/food" component={Food}/>
                    <Route exact path="/flickr/:searchName" component={DrawSearch}/>
                    <Route exact path="/counterRedux" component={CounterRedux}/>


                </Switch>


            </BrowserRouter>
        </div>
    );
}

export default App;