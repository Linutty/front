import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo2.png";
import "./App.css";
import Projects from "./Projects"; 

export default function Home() {
    const navigate = useNavigate();
  
    function navigateToProjects() {
      navigate("/Projects"); 
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={navigateToProjects}>Eiti į projektus</button>
      </header>
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <nav>
//           <ul>
//             <li>
//               <Link to="/projects">Eiti į projektus</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <Route exact path="/projects" component={Projects} />
//     </div>
//   );
// }

// export default App;
