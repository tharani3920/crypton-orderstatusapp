// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import WidgetOrderStats from "./components/WidgetOrderStats";

const App: React.FC = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setStats(data.stats));
  }, []);

  return (
    <div className="App">
      <section>
        <h2 style={{ textAlign: "center" }}>1 - Order Stats Widget</h2>
        <WidgetOrderStats stats={stats} />
      </section>
    </div>
  );
};

export default App;
