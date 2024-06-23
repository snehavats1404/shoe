import "./App.css";
import HeroSection from "./Hero";

const App=()=> {
  return (<div>
    <div>
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo"/>
      </div>
        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>

        </ul>
        <button>Login</button>
      
    </nav>
    </div>

    <HeroSection/>
  </div>
  );

};

export default App;
