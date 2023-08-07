import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo2.png";
import "./App.css";
import Projects from "./Projects.js";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/Projects">Įmonės vykdomi projektai</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function AppContent() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route
          exact
          path="/"
          component={() => <h1>Įmonės vykdomi projektai</h1>}
        />
        <Route exact path="/Projects" component={Projects} />
      </Router>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/vykdomi-projektai">Įmonės vykdomi projektai</Link>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         <Route
//           exact
//           path="/"
//           component={() => <h1>Įmonės vykdomi projektai</h1>}
//         />
//         <Route exact path="/Projects" component={Projects} />{" "}
//       </div>
//     </Router>
//   );
// }

// export default App;
