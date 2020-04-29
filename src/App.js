import React,{Fragment} from 'react'
import Navbar from './components/Navbar';
import UserItem from './components/Useritem'
import axios from 'axios';
import Search from './components/Search'
import Alert from './components/Alert';
import About from './components/About'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
 class App extends React.Component{
   state ={
     users: [],
     alert: null
   }
  //  async componentDidMount(){
     
  //  const res =await axios.get('https://api.github.com/users')
  //  console.log(res.data);

  //  this.setState({users:res.data})

  //  }

   searchUser = async(text)=>{
    const res =await axios.get(`https://api.github.com/search/users?q=${text}`)
     console.log(res.data);
  
      this.setState({users:res.data.items})
      
  
   }

   clearUser = ()=>{
     this.setState({users: []})
   }
   setAlert = (msg,type)=>{
     this.setState({alert:{msg,type}})

    setTimeout(()=>{
      this.setState({alert:null})
    },3000)
   }
   render(){
     return(
       <Router>
     <div>
    <Navbar title="Git Hub Finder" icon="fa fa-github">

    </Navbar>
    
    <div class="container">
    
      <Alert alert={this.state.alert}/>
      <Switch>
        <Route exact path ="/" render = { props =>(
          <Fragment>
    <Search  searchUser={this.searchUser} clearUser={this.clearUser} showClear={this.state.users.length > 0 ? true : false}
    setAlert={this.setAlert}/>
    <UserItem users={this.state.users}/>
    </Fragment>
        )}/>
        <Route exact path="/about" component={About}/>
    </Switch>
    </div>
    

    </div>
    </Router>
     )
   }
 }
 export default App