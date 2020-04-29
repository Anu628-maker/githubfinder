import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
render(){
    return(
      <nav className="navbar bg-primary">
        <h1><i class={this.props.icon}></i>
             {this.props.title}</h1>
             <ul>
               <li>
                 <Link to="/">Home</Link>
               </li>
               <li>
                 <Link to="/about">About</Link>
               </li>
             </ul>
      </nav>
    )
  }
}
export default Navbar