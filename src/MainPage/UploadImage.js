import React from "react";
import axios from "axios";

export default class UploadImage extends React.Component{
    constructor(props){
        super(props);
        this.state={image:'',imageFile:''}
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(event){
        event.preventDefault();
        this.setState({
            image:event.target.files[0],
            imageFile:event.target.files[0].name,
        })
    }
    
    onSubmit(event){
        event.preventDefault();
        const image=this.state.image;
        var data=new FormData();
        data.append('file',image);
        Request.send(data);
        axios.post(
            {   
                method:"POST",
                url:"http://127.0.0.1:5000/validating",
                headers:{
                    "Accept": "*/*", 
    "Connect-Time": "1", 
    "Connection": "close", 
    "Content-Length": "236", 
    "Content-Type": "multipart/form-data",
                },
                body:data
            }).then((response)=>{
                console.log(response.data);
            }).catch((error)=>{
                console.log("error"+error);
            })
            console.log("Completed");
    }
    
    render(){
        return(<div>
            <form onSubmit={this.onSubmit}>
                <br/>
                <div><input type="file" name="aadhar" onChange={this.onChange}/></div><br/>
                
                <button type="submit" >submit</button><br/>
            </form>
        </div>)
    }
}