import illustration from "./images/illustration-dashboard.png";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  let [errMessage, setErrMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = document.querySelector(".error");
    const input = document.querySelector("input[type=text]");
    const success = document.querySelector(".success");
    // console.log(err);
    // console.log(errMessage);
    if (email == "") {
      setErrMessage("Whoops! It looks like you forgot to add your email");
      err.style.visibility = "visible";
      input.style.borderColor = "var(--Light-Red)";
    } else if (/^[\w]+@[\w]+[.]{1}[a-zA-Z]{2,}$/.test(email)) {
      err.style.visibility = "hidden";
      input.style.borderColor = "var(--Pale-Blue)";
      success.style.zIndex = "1";
      success.style.opacity = "100%";
      setTimeout(() => {
        success.style.zIndex = "-1";
        success.style.opacity = "0%";
      }, 2000);
    } else {
      setErrMessage("Please provide a valid email address");
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
        <div className="error">{errMessage}</div>
      </form>
      <img src={illustration} alt="illustration" />
      <div className="success">Subscribed</div>
    </main>
  );
}

export default App;
