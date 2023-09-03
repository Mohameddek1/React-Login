import React, { useEffect, useState } from "react";
import validation from "./validation";

const Login = ({submitForm}) => {
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({})
  const [data, setData] = useState(false)

  const handleChange = (e) => {
    setValue({...value, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    setError(validation(value))
    setData(true)
  };
  useEffect(() => {
    if (Object.keys(error).length=== 0 && data) {
      submitForm(true)
    }
  });

  return ( 
    <div className="login-container">
      <h2>Login</h2>
      <div className="form">
        <input type="text" name="fullname" placeholder="fullname" value={value.fullname} onChange={handleChange} />
        {error.fullname && <p className="error" >{error.fullname}</p>}
      </div>
      <div className="form">
        <input type="email" name="email" placeholder="email" value={value.email} onChange={handleChange} />
        {error.email && <p className="error" >{error.email}</p>}
      </div>
      <div className="form">
        <input type="password" name="password" placeholder="password" value={value.password} onChange={handleChange} />
        {error.password && <p className="error" >{error.password}</p>}
      </div>
      <div className="btn">
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
   );
}
 
export default Login;