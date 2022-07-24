import { GoogleLogin } from 'react-google-login';
import Title from "Title";
import { gapi } from "gapi-script";
import { refreshTokenSetup } from 'utils/refreshToken';

import { useState } from "react";

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
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
          <GoogleLogin
                        clientId={clientId}
                        buttonText="Login"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        style={{ marginTop: '100px' }}
                        isSignedIn={true}
                      />
    );
  }


export default Login;