import {useState} from "react";

const Form = () => {
    const [form , setForm] = useState({
        name: "",
        email : "",
        password : ""
    })
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log("form submitted");
    }
    return (
        <>

            <form onSubmit={formSubmitHandler} style={{"display" : "flex", "flexDirection" : "column", "gap" : "10px"}}>
                <input type="text" placeholder={"Name"} name="name-field" onChange={(e) => setForm(prev => ({...prev , name : e.target.value}))} />
                <input type="emai" name="email-field" placeholder={"Email"} onChange={(e) => setForm(prev => ({...prev , email : e.target.value}))} />
                <input type="password" name="password-field" placeholder={"Password"} onChange={(e) => setForm(prev => ({...prev , password : e.target.value}))} />
                <button  >Submit</button>
            </form>
            <div>
                <p>The name is {form.name}</p>
                <p>The email is {form.email}</p>
                <p>The password is {form.password}</p>
            </div>
        </>
    )
}

export default Form;