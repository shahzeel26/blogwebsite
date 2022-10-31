import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Forgot extends Component{
    handleSubmit=e=>{
        e.preventDefault();
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <span className="loginTitle">Forgot Password</span>
            <div className="login">
            <label>Email</label>
            <input type="email" className="loginInput" placeholder="Email"
            onChange={e=> this.email=e.target.value}/>
            </div>
            <button className="loginButton" type="submit" /*disabled={isFetching}*/>
          Submit
        </button>
            </form>
        )
    }
}