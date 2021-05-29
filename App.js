
import React,{useEffect} from 'react';
import {allproduct} from "./Service/getallproducts"
import { useDispatch } from 'react-redux'
import { getproduct } from "./redux/Actions/productaction"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductComponent from "./pages/Productionlisting/ProductComponent"
import ProductDetails from "./pages/ProductionDetails/ProductionDetails"
import './App.css';
import SearchComponent from "./component/SearchComponent/SearchComponent"
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    allproduct().then((data)=>{
       dispatch(getproduct(data))
   })
  },[])
  return (
    <div className="ui grid container" > 
    <Router>
        <Switch>
      <Route path="/" exact component={ProductComponent} />
      <Route path="/search" exact component={SearchComponent} />
      <Route path="/product/:productId" component={ProductDetails} />
      <Route>404 Not Found!</Route>
    </Switch>
  </Router>
    </div>

  );
}

export default App;
