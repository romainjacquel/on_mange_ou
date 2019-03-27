import React,{Component} from 'react'
import {Route,Switch} from "react-router-dom";
import Home from "./containers/home"
import Header from './components/header'
import Appli from "./containers/appli"
import GoogleMapAppli from "./containers/google-map-appli"

// Router : On va mettre toutes nos routes dedans

class Routes extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/appli" component={Appli}/>
                    <Route exact path="/google-map" component={GoogleMapAppli}/>
                </Switch>
            </div>
        )
    }
}

export default Routes