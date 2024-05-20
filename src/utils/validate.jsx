
const validateInfo = (email, password) =>{

    const emailPattern = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/.test(email);
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    if(!emailPattern) return <h3>invalid email</h3>;
    if(!passwordPattern) return <h3>invalid password</h3>;
}

export default validateInfo;