import illustration from "./images/illustration-dashboard.png";

function App() {
  // const email = document.querySelector("input[type=text]").value;

  // const handleClick = () => {
  // console.log(email);
  // console.log("clicked");
  // console.log(/^[\w]+@[\w]+[.]{1}[a-zA-Z]{2,}$/.test(email));
  // };
  return (
    <main>
      <form>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email address..."
        ></input>
        <input type="submit" value="Notify Me" />
      </form>
      <div className="error">Please provide a valid email address</div>
      <img src={illustration} alt="illustration" />
    </main>
  );
}

export default App;
