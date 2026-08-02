import React, { useState, useEffect } from 'react';
import Navbar from './js/Navbar';
import Home from './js/Home';
//import Login from './js/Login';
// import './css/Login.css'
import AboutUs from './js/Aboutus';
// import AdminPanel from './js/AdminPanel';

// Pages for home page
import AiMl from './js/AiMl';
import Ds from './js/Ds';
import Rl from './js/Rl';
import Cs from './js/Cs';
import Nlp from './js/Nlp';
import Git from './js/Git';


import Python from './js/Python';
// import Forgotpw from './js/Forgotpw';
// import Signup from './js/Signup';
import Footer from './js/Footer';
import Coding from './js/Coding';
import { Routes, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


function App() {
  useEffect(() => {
    console.log('App component mounted');
    // You can also check the current URL here
    console.log(window.location.pathname);
  }, []); 
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);
  // const navigate = useNavigate();

  // const handleSignup = async (email, password, firstName, lastName, phoneNumber) => {
  //   console.log("handleSignup called with:", email, password, firstName, lastName, phoneNumber);
  //   try {
  //       const response = await fetch('http://localhost:3001/signup', {
  //           method: 'POST',
  //           headers: {
  //               'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({ email, password, firstName, lastName, phoneNumber })
  //       });

  //       const data = await response.text();

  //       if (response.ok) {
  //           alert(data);
  //           navigate('/login'); // Navigate to login after successful signup
  //       } else {
  //           alert(data); // Show error from server response
  //       }
  //   } catch (error) {
  //       console.error('Signup error:', error);
  //       alert('Signup failed');
  //   }
  // };
  
//   const handleLogin = async (email, password) => {
//     // Regular expressions for email and password validation
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     // Check if both email and password are entered
//     if (!email || !password) {
//         alert("Please enter both email and password");
//         return;
//     }

//     // Check if email is in valid format
//     if (!emailRegex.test(email)) {
//         alert("Please enter a valid email");
//         return;
//     }

//     // Check if password is in valid format
//     if (!passwordRegex.test(password)) {
//         alert("Please enter a valid password");
//         return;
//     }

//     try {
//         const response = await fetch('http://localhost:3001/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password })
//         });

//         const data = await response.text();
//         if (response.ok) {
//             setIsLoggedIn(true);
//             setIsAdmin(email === 'admin@example.com');
//             navigate('/');
//         } else {
//             alert(data); // Display error message from the server
//         }
//     } catch (error) {
//         console.error('Login error:', error);
//         alert('Login failed');
//     }
// };

// const handleLogout = () => {
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//     navigate('/login'); // Redirect to login page on logout
// };
//   if (!isLoggedIn) {
//     return (
//       <Routes>
//         {/* <Route path="/signup" element={<Signup onSignup={handleSignup} />} /> */}
//         {/* <Route path="/forgotpw" element={<Forgotpw />} /> */}
//         {/* <Route path="/login" element={<Login onLogin={handleLogin} />} /> */}
//         {/* Redirect to login by default */}
//         <Route path="*" element={<Login onLogin={handleLogin} />} />
//       </Routes>

//     );
//   }
  return (
    // <>
    //   <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<AboutUs />} />
    //     {/* For dropdown button */}
    //     <Route path="/aiml" element={<AiMl />} />
    //     <Route path="/Ds" element={<Ds />} />
    //     <Route path = "/Coding" element={<Coding />} />
    //     <Route path = "/python" element= {<Python />} />
    //     {/* <Route path="/signup" element={<Signup onSignup={handleSignup} />} /> */}
    //     {/* <Route path="/forgotpw" element={<Forgotpw/>}></Route> */}
    //     {/* {isAdmin && <Route path="/admin" element={<AdminPanel />} />} */}
    //     {/* Redirect or show a not found component for unmatched routes */}
    //   </Routes>
    //   <Footer />
      
    // </>
      <>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          {/* For dropdown button */}
          <Route path="/AIML" element={<AiMl />} />
          <Route path="/DS" element={<Ds />} />
          <Route path="/RL" element={<Rl />} />
          <Route path="/CS" element={<Cs />} />
          <Route path="/NLP" element={<Nlp />} />
          <Route path="/GIT" element={<Git />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/python" element={<Python />} />
          {/* {isAdmin && <Route path="/admin" element={<AdminPanel />} />} */}
          {/* Redirect or show a not found component for unmatched routes */}
          {/* <Route path="*" element={<NotFoundComponent />} /> */}
        </Routes>
        <Footer />
      </>
  );
}


export default App;
