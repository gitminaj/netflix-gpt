
const validateInfo = (email, password,name="Default") =>{

    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const namePattern = /^[a-zA-Z\s-]+$/.test(name)

    if(!emailPattern) return "Invalid Email";
    if(!passwordPattern) return "Invalid Password";
    if(!namePattern) return "Invalid Name (minimum 5 char)";

    return null
}

export default validateInfo;