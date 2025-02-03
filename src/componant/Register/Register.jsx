import { useState } from "react";
import auth from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

 
 
const Register = () => {

    

    const [errormessage,seterrormesage] = useState('');
    const[successmessage,setsuccessmessage] =useState('');
    const handleregister = e =>
    {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        if(password.length<6)
            {
                seterrormesage('Password at least 6 chracter');
                return;
            }
        seterrormesage('');
        setsuccessmessage('');

         createUserWithEmailAndPassword(auth,email,password)
         .then((result)=>
        {
            console.log(result.user)
            setsuccessmessage('account create Successfully');
        })

        .catch((error)=>
        {
            console.log(error);
            seterrormesage(error.message);
        })
         

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="font-bold text-4xl ">Register Now</h1>
            <form onSubmit={handleregister}>
                <input type="input" name="email" placeholder="Email Address" className="bg-slate-200 my-8"></input>

                <br/>

                <input type="password" name="password" placeholder="Password" className="bg-slate-200 mb-8"></input>

                <br/>

                <input type="submit" name="submit" placeholder="submit" className="bg-lime-400 mb-8 px-16"></input>
                


                

                <br/>


            </form>

            {
                errormessage &&
                <p className="text-red-800">{errormessage}</p>

            }

{
                successmessage &&
                <p className="text-green-600">{successmessage}</p>

            }
        </div>
    );
};

export default Register;