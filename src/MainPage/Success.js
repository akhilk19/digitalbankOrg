import React from "react"
var htmlDoc;
class Success extends React.Component{
    constructor(props){
        super(props);
        this.state={
            outputData:{},
        }
        this.createMarkUp=this.createMarkUp.bind(this);

    }
    createMarkUp(){

    }
    componentDidMount(){
       
    }
    render(){
        if(this.props.divNum!="2"){
        return(
            <div>
                Reutrn NUll
            </div>
        );
        }
        else{
           window.location.href="https://watson-vehicle-damage-analyzer-capgeminitest.mybluemix.net/";
        }
    }
}

export default Success;