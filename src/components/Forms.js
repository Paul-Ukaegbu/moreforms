import React, { useState } from  'react';
    
    
const Form = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };
    
    return (
        <form>
            <label htmlFor="firstName">First Name</label>
            <input onChange={onchange} type="text" name="firstName"/><br/>

            <label htmlFor="lastName">Last Name</label>
            <input onChange={onchange} type="text" name="lastName"/><br/>

            <label htmlFor="email">Email</label>
            <input onChange={onchange} type="email" name="email"/><br/>

            <label htmlFor="password">Password</label>
            <input onChange={onchange} type="password" name="password"/><br/>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={onchange} type="password" name="confirmPassword"/><br/>
        </form>
      
    )
}
    
export default Form