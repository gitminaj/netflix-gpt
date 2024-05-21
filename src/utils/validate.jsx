
const validateInfo = (email, password) =>{

    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!emailPattern) return "invalid email";
    if(!passwordPattern) return "invalid password";
}

export default validateInfo;