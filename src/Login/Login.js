import { GoogleLogin } from 'react-google-login';
import Title from "Title";
import { gapi } from "gapi-script";
import { refreshTokenSetup } from 'utils/refreshToken';
import './Login.css';
import { useState } from "react";
import { CgProfile } from 'react-icons/cg';

const clientId =
  '432902361823-j8ifqqk6g5v8ho2u493b7q4uivu50c2o.apps.googleusercontent.com';

function Login() {

const [selectedOption, setSelectedOption] = useState([]);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [success, setSuccess] = useState(false);

   // Handling the form submission
   const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: name, email: email, password: password})
}
    // Handling the name change
    const handleName = (e) => {
      setName(e.target.value);
    };

    const handleEmail = (e) => {
      setEmail(e.target.value);
    };

    const handlePassword = (e) => {
      setPassword(e.target.value);
    };

      const handleSubmit = () => {
        localStorage.setItem('user', email)
          fetch("http://localhost:8080/api/auth/signup/", requestOptions)
            .then((response) => response.json())
            .then(setSuccess(true)
            );
      };
const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj.email);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
    setEmail(res.profileObj.email);
    setName(res.profileObj.name);
    sendLogin();

  };

  let sendLogin = () => {
      try {
      console.log("sendign request");
        fetch("http://localhost:8080/api/auth/signup/google", {
          method: "POST",
          headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
          body: JSON.stringify({
           name: name, email: email
          }),
        });
      } catch (err) {
        console.log(err);
      }
    };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
   <div className="container-login">
          <div className="form-box">
            <div className="header-form">
              <h4 className="text-primary text-center">
               <CgProfile size={60} />
               </h4>
              <div className="image">
              </div>
            </div>
            <div className="body-form">
             <form>
                <div className="input-group mb-3">
     <div className="input-group-prepend">
      <span className="input-group-text"><i class="fa fa-user"></i></span>
    </div>
    <input type="text" className="form-control" placeholder="Username" />
  </div>
   <div className="input-group mb-3">
     <div className="input-group-prepend">
      <span className="input-group-text"><i class="fa fa-lock"></i></span>
    </div>
    <input type="text" className="form-control" placeholder="Password" />
  </div>
   <button type="button" className="btn btn-secondary btn-block">LOGIN</button>
   <div className="message">
   <div><a className="a-login" href="#">Forgot your password</a></div>
   </div>
     </form>
              <div className="social">
                 <GoogleLogin
                                        clientId={clientId}

                                        onSuccess={onSuccess}
                                        onFailure={onFailure}
                                        cookiePolicy={'single_host_origin'}
                                        isSignedIn={true}
                                      />
              </div>
            </div>
          </div>
         </div>

    );
  }


export default Login;