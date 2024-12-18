// // src/SignUp.jsx
// import React, { useState } from 'react';
// // import { createUser WithEmailAndPassword } from "firebase/auth";
// import { auth } from './firebase';

// const SignUp = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         try {
//             // await createUser WithEmailAndPassword(auth, 
//             // email, password);
//             alert("User  created successfully!");
//         } catch (error) {
//             alert(error.message);
//         }
//     };

//     return (
//         <form onSubmit={handleSignUp}>
//             <h2>Sign Up</h2>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <button type="submit">Sign Up</button>
//         </form>
//     );
// };

// export default SignUp;



import React, { useState } from 'react'
import { Link } from 'react-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            setError(`Failed to signup: ${error}`)
        }
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <input type="email" placeholder='username ...' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='password ...' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign Up</button>
            {error && <p>{error}</p>}
            <p>Already have an account? <Link to="/signin">Login</Link></p>
        </div>
  )
}