import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
//import { auth } from "./firebase"; // Update the path based on your setup


 

const Login = () => {
    const [errormessage,seterrormesage] = useState('');
    const[successmessage,setsuccessmessage] =useState('');
    const emailRef = useRef(null);

    const handleforgetpassword = e =>
        {

            const email = emailRef.current.value;
            if(!email)
            {
                console.log("Please gime a email please",emailRef.current.value);
                
                return;
            }
            else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
            {

                console.log("Give me valid email");
                return;

            }
            //console.log("forget button handle clicked",emailRef.current.value);
           sendPasswordResetEmail(auth,email)
           .then(()=>
           {
             alert('Please check your Email');
           }
        )

           .catch((error)=>
        {
            console.log('error occured',error);
        })

           
        
        }

    const handlelogin = e =>
    {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        seterrormesage('');
        setsuccessmessage('');

         signInWithEmailAndPassword(auth,email,password)
          .then((result)=>
        {
            console.log("Result",result)
            setsuccessmessage("Log in Successful");
        })

        .catch((error)=>
            {
                console.log("error",error)
                seterrormesage('Error occured');
            })


             
    }
    return (
        <div>
            <h3>This is log in page</h3>



            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handlelogin}className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email"

          ref={emailRef}
          
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a onClick={handleforgetpassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      {
                errormessage &&
                <p className="text-red-800">{errormessage}</p>

            }

{
                successmessage &&
                <p className="text-green-600">{successmessage}</p>

            }

<p className="text-3xl text-green-700">Do you have Account? </p>
<Link to="/register">Please Register</Link>

    </div>
  </div>
</div>



             
         
    </div>
 

         
    );
};

export default Login;