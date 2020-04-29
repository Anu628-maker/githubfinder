import React from 'react';

const Users = (props)=>{


return (
<div className="card text-center">
<img 
src=
{props.user.avatar_url} alt =""className="round-img"
    style={{width:"90px"}}>
</img>
<h3>{props.user.login}</h3>


<a href={props.user.html_url} className="btn btn-dark btn-sm my-1">More</a></div>
)

}

export default Users;
