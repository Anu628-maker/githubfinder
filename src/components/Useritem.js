import React, { Component } from 'react'
import Users from './users';
class USerItem extends Component{
    
    render()
    {
        return(
            <div style={useStyle}>
           {this.props.users.map(user=>(
               <Users user={user}></Users>
           ))}
               </div>
        )
    }
}

const useStyle ={
    display: 'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}
export default USerItem