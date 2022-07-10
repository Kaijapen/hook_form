import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };

    const validateFirstName = (e) => {
        if (e.target.value.length == 0){
            setFirstNameError("");
            setFirstName("");
        }else if (e.target.value.length <= 2 ){
            setFirstNameError("First name must be at least 3 characters.");
            setFirstName("");
        } else {
            setFirstNameError("");
            setFirstName(e.target.value);
        }
    }

    const validateLastName = (e) => {
        if (e.target.value.length == 0){
            setLastNameError("");
            setLastName("");
        }else if (e.target.value.length <= 2 ){
            setLastNameError("Last name must be at least 3 characters.");
            setLastName("");
        } else {
            setLastNameError("");
            setLastName(e.target.value);
        }
    }

    const validateEmail = (e) => {
        if (e.target.value.length == 0){
            setEmailError("");
            setEmail("");
        }else if (e.target.value.length <= 4 ){
            setEmailError("Email must be at least 5 characters.");
            setEmail("");
        } else {
            setEmailError("");
            setEmail(e.target.value);
        }
    }

    const validatePasswords = (e) => {
        if (e.target.value.length == 0){
            setPasswordError("");
            setPassword("");
        }else if (e.target.value.length < 8 ){
            setPasswordError("Password must be at least 8 characters.");
            setPassword("");
        }else {
            setPasswordError("");
            setPassword(e.target.value);
        }
        if (e.target.value != confirmPassword){
            setConfirmPasswordError("Passwords must match!");
            setPassword(e.target.value);
        }
    }
    const validatePasswordConfirm = (e) => {
        if (e.target.value.length == 0){
            setConfirmPasswordError("");
            setConfirmPassword("");
        }else if (e.target.value != password){
            setConfirmPasswordError("Passwords must match!");
            setConfirmPassword("");
        }else {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError("");
        }
    }
    
    return(
        <>
            <form onSubmit={ createUser }>
                <h4>Enter your info pls :)</h4>
                <div>
                    <label >First Name: </label> 
                    <input type="text" onChange={ validateFirstName } />
                    {
                        firstNameError ?
                        <p>{firstNameError}</p>:''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ validateLastName } />
                    {
                        lastNameError ?
                        <p>{lastNameError}</p>:''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ validateEmail } />
                    {
                        emailError ?
                        <p>{emailError}</p>:''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ validatePasswords } />
                    {
                        passwordError ?
                        <p>{passwordError}</p>:''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ validatePasswordConfirm } />
                    {
                        confirmPasswordError ?
                        <p>{confirmPasswordError}</p>:''
                    }
                </div>
            </form>
            <div>
                <h4>Your Form Data:</h4>
                <p>Name: {firstName} {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    );
};
    
export default UserForm;
