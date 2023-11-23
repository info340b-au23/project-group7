import React, { useState } from 'react';
import '../index.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');
        console.log('Login attempt with', username, password);

        try {
            const response = await axios.post('/api/login', { username, password });

            if (response.data.success) {
                console.log('Login successful');
            } else {
                setErrorMessage('Login failed. Please try again.');
            }

            console.log('Username:', username, 'Password:', password);
        } catch (error) {
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div
            className='body'
            id="login"
        >
            <div className="login-container">
                <h2>User Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br />
                    <input type="submit" value="Login" />
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <p>Don't have an account? <a href="/">Go to Homepage</a></p>
            </div>
        </div>
    );
}

export default Login;
