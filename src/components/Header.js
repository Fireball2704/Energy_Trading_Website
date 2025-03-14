
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <header>
      <video src="./img/video.mp4" loop autoPlay muted></video>
      <h1>Welcome to SecureChain</h1>
      <div className="row">
        <button className="btn" onClick={() => navigate("/register")} style={{ cursor: "pointer" }}>
          Register
        </button>

        <button className="btn" onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
          Log in
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}

export default Header;