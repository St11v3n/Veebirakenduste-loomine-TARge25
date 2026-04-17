import { useState } from 'react'
import './App.css'
function App() {
  const [page, setPage] = useState("home");

     return (
    <div>
    <header>
      <h1>Interesting Art Design</h1>

      <nav style={{ display: "flex", gap: "20px" }}>
        <button className = "menubuttons" onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("contact")}>Contact</button>
        <button onClick={() => setPage("paintings")}>Paintings</button>
        <button onClick={() => setPage("furniture")}>Furniture</button>
      </nav>
      </header>


      <div style={{ marginTop: "20px" }}>
        {page === "home" && (
          <div>
            <h2>Home</h2>
            <p>Welcome to the home page.</p>
          </div>
        )}
        
        {page === "about" && (
          <div>
            <h2>About</h2>
            <p>This app was built with React and TypeScript.</p>
          </div>
        )}

        {page === "contact" && (
          <div>
            <h2>Contact</h2>
            <p>Phone Number:
              Email: example@email.com</p>
          </div>
        )}

        {page === "paintings" && (
          <div>
            <h2>Paintings</h2>
            <p>Phone Number:
              Email: example@email.com</p>
          </div>
        )}

        {page === "furniture" && (
          <div>
            <h2>Furniture</h2>
            <p>Phone Number:
              Email: example@email.com</p>
          </div>
        )}


      </div>
    </div>
  );
}

export default App;