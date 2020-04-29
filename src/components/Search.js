import React, { Component } from 'react'

class Search extends Component {
    state={
        text: ""
    }

    onChange = (e)=>{
        this.setState({text: e.target.value})
        console.log(e.target.value)
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log("submitted")
        if(this.state.text === ''){
            this.props.setAlert('Please Enter somthing', 'light')
        }else{
        this.props.searchUser(this.state.text)
        this.setState({ text: ''})
        }
    }
    render() {
        return (
            <div>
              <form className="form" onSubmit = {this.onSubmit}>
                  <input type="text" name="text" placeholder="Search here..." value={this.state.text} onChange={this.onChange}/>
                  <input type="submit" value="submit" className="btn btn-dark btn-block"/>
                  </form>
                  {this.props.showClear && 
                  <input type="button" className="btn btn-light btn-block" value="clear" onClick={this.props.clearUser}></input>  
    }
            </div>
        )
    }
}

export default Search;