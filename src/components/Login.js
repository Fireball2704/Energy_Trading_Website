import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/images/css/Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", formData);
    navigate("/Dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to SecureChain</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-btn">Log In</button>
        </form>
        <div className="login-link">
          Don't have an account? <Link to="/register">Create an Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;