import { useState } from "react";
import auth from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword ,sendEmailVerification} from "firebase/auth";
import { Link } from "react-router-dom";


 
const Register = () => {

    

    const [errormessage,seterrormesage] = useState('');
    const[successmessage,setsuccessmessage] =useState('');
    const[showpassword,setshowpassword] = useState(false);
    const handleregister = e =>
    {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const termsandcondition = e.target.terms.checked;
        console.log(email,password,termsandcondition);
        if(password.length<6)
            {
                seterrormesage('Password at least 6 chracter');
                return;
            }

            else if(!/[A-Z]/.test(password))
            {
                seterrormesage('put atlist one uppercase Letter');
                return;
            }

            else if (!termsandcondition)
            {
                seterrormesage('Acceot our Terms and Condition');
                return;
            }
        seterrormesage('');
        setsuccessmessage('');

         createUserWithEmailAndPassword(auth,email,password)
         .then((result)=>
        {
            console.log(result.user)
            setsuccessmessage('account create Successfully');


             

       //const auth = getAuth();
       sendEmailVerification(result.user)
        .then(() => {
          alert('please verify Your user');
             });
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

                <input type={showpassword? "text" :"password" } name="password" placeholder="Password" className="bg-slate-200 mb-8"
                 ></input>

                 <span onClick={()=>setshowpassword(!showpassword)}>
                     {
                        showpassword?<p>hidepassword</p> : <p>Showpassword</p>
                     }
                 </span>

                   
                 
                 <input type="checkbox" name="terms" id="terms"></input>
                 <label htmlFor="terms">Accepts Our Terms And Condition</label>
                  

                <br/>
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

<p className="text-3xl text-green-700">Already Regigstered? </p>
<Link to="/login">Please Log in</Link>

        </div>
    );
};

export default Register;