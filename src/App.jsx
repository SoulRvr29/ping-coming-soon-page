import illustration from "./images/illustration-dashboard.png";
import { useState } from "react";

function App() {
  const err = document.querySelector(".error");
  const input = document.querySelector("input[type=text]");
  const [email, setEmail] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    if (/^[\w]+@[\w]+[.]{1}[a-zA-Z]{2,}$/.test(email)) {
      err.style.visibility = "hidden";
      input.style.borderColor = "var(--Pale-Blue)";
    } else {
      err.style.visibility = "visible";
      input.style.borderColor = "var(--Light-Red)";
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your email address..."
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input type="submit" value="Notify Me" />
        <div className="error">Please provide a valid email address</div>
      </form>
      <img src={illustration} alt="illustration" />
    </main>
  );
}

export default App;
