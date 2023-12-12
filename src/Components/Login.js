import React from 'react';
import '../index.css';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; //install option 1

const firebaseUIConfig = {
    signInOptions: [ //array of sign in options supported
      //array can include just "Provider IDs", or objects with the IDs and options
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    ],
    signInFlow: 'popup', //don't redirect to authenticate
    callbacks: { //"lifecycle" callbacks
      signInSuccessWithAuthResult: () => {
        return false; //don't redirect after authentication
      }
    }
  }
  
  // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setErrorMessage('');
    //     console.log('Login attempt with', username, password);

    //     try {
    //         const response = await axios.post('/api/login', { username, password });

    //         if (response.data.success) {
    //             console.log('Login successful');
    //         } else {
    //             setErrorMessage('Login failed. Please try again.');
    //         }

    //         console.log('Username:', username, 'Password:', password);
    //     } catch (error) {
    //         setErrorMessage('An error occurred. Please try again later.');
    //     }
    // };

function Login() {
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);

    if(loading){
        return <div className='body' id="login" ><div className='login-container'><p>Loading</p></div><a href="/">Go to Homepage</a></div>

    }
    if(error){
        return <div className='body' id="login" ><div className='login-container'><p>Error: {error}</p></div><a href="/">Go to Homepage</a></div>
    }
    if(user){
        return <div className='body' id="login" ><div className='login-container'><p>Welcome {user.displayName}</p></div><a href="/">Go to Homepage</a></div>
    } else {
        return (
            <div className='body' id="login" >
                <div className="login-container">
                    <h2>User Login</h2>
                    <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
                    <p>Don't have an account? <a href="/">Go to Homepage</a></p>
                </div>
            </div>
        )
    }
}

export default Login;
