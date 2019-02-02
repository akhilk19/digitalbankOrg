import React, { Component } from 'react';
import {Row,Col,Container} from "reactstrap";
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import MainFile from "./MainPage/MainFile";
import Success from "./MainPage/Success";
import UploadImage from "./MainPage/UploadImage"
class App extends Component {
    constructor(props){
      super(props);
      this.state={
        visibleDiv:"1",
        data:{}
      }
      this.onSuccess=this.onSuccess.bind(this);
    }

    onSuccess(param,param2){
        console.log("Success app.js "+param);
        this.setState({
          data:param,
          visibleDiv:param2
        })
        console.log(this.state.data);
      }

      onFailure(param){
        console.log("Failure Hit With root cause");
      }
    render(){
      return(
        <Container className="background">
      <div className="background">

        <div className={this.state.visibleDiv=="1"?" ":" displayNone"}>
          <UploadImage />
        </div>
        <div className={this.state.visibleDiv=="2"?" ":" displayNone"}>
          <Success info={this.state.data} divNum={this.state.visibleDiv}/>
          <MainFile Success={this.onSuccess}/>
        </div>

      </div>
      </Container>);
    }
}

export default App;
