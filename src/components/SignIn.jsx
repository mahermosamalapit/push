import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { auth, googleProvider } from '../firebase'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import "../App.css";  // Import the CSS file

export const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        } catch (error) {
            setError(`Error in signing in: ${error.message}`)
        }
    }

    const handleSignInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            navigate('/')
        } catch (error) {
            setError(`Error in signing with google: ${error.message}`)
        }
    }

    return (
        <div className="container">
            <h2>Login</h2>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email...' />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password...' />
            <button onClick={handleSignIn}>Login</button>
            <p>or</p>
            <button onClick={handleSignInWithGoogle}>Login with Google</button>
            {error && <p>{error}</p>}
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    )
}
