module.exports.validateRegisterInput=(
    username,
    email,
    password,
    confirmPassword
)=>{
    const errors={};
    if (username.trim()==="")
    {
        errors.username="Please enter the username";
    }
    if (email.trim()==="")
    {
        errors.email="Please enter the email";
    }
    else
    {
        const regEx=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!email.match(regEx))
        {
            errors.email="Please enter a valid email address";
        }
    }
    if(password==="")
    {
        errors.password="Please enter a password";
    }
    else
    {
        if(password!==confirmPassword)
        {
            errors.confirmPassword="Please enter matching password";
        }
    }
    return{
        errors,
        valid:Object.keys(errors).length<1
    };
};

module.exports.validateLoginInput=(username,password)=>
{
    const errors={};
    if (username.trim()==="")
    {
        errors.username="Please enter the username";
    }
    if (password==="")
    {
        errors.password="Please enter the Password";
    }
    return{
        errors,
        valid:Object.keys(errors).length<1
    };
}