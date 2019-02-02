import React from "react";
import Axios from 'axios';
import {Row,Col,Container} from "reactstrap";
import "../MainPage/main.css"


class MainFile extends React.Component{
constructor(props){
    super(props);
    this.state={
      Name:"",
      RegdNumber:"",
      output:{}
    }
    this.onSubmit=this.onSubmit.bind(this);
    this.onNumberChange=this.onNumberChange.bind(this);
    this.onNameChange=this.onNameChange.bind(this);
  }

  onNumberChange(e){
    this.setState({
      RegdNumber:e.target.value,
    })
  }

  onNameChange(e){
    this.setState({
      Name:e.target.value
    })
  }

  onSubmit(){
    var output;
    var name=this.state.Name;
    var number=this.state.RegdNumber;
    const user={
        name:this.state.Name,
        regNo:this.state.RegdNumber
    }
    Axios.post("http://127.0.0.1:5000/validateDetails",{user})
      .then(response=>{
          const k=response.data;
            this.setState({
                output:k
            })
            this.props.Success(this.state.output,"2");
      }
      )
          
    .catch(function(error){
        console.log(" --> Error hit "+error);
    })
    
    
  }

  render() {
    return (
      <div>
     <Container >
         <Row><Col><h1>Loan Insurance</h1></Col></Row>
        <Row>
        <Col> <label className="text1">Name : </label></Col>
        <Col><input type="text" onChange={this.onNameChange}
              value={this.state.Name}/>
        </Col>  
        </Row> 
        <Row>
        <Col>
            <label className="text1">Vehicle Registration Number : </label>
        </Col>
        <Col>
            <input type="text" onChange={this.onNumberChange}
                value={this.state.RegdNumber}/>
        </Col>
        </Row>
        <Row>
        <Col>
            <label className="text1">Vehicle Chasis Number : </label>
        </Col>
        <Col>
            <input type="text"
                value={this.state.RegdNumber}/>
        </Col>
        </Row>      
        <Row style={{textAlign:"center"}}><Col><button type="submit" value="Submit"
            onClick={this.onSubmit}>Submit</button></Col>
        </Row>
        </Container>
      </div>
    );
  }

}
export default MainFile;