import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [islogged, setIslogged] = useState();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data);
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login";
    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        setIslogged(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
    reset({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    const condition = localStorage.getItem("token") ? true : false;
    setIslogged(condition);
  }, []);
  const handleClick = () => {
    localStorage.removeItem("token");
    setIslogged(false);
  };
  if (islogged) {
    return (
      <div>
        <h1>user Logged</h1>
        <button onClick={handleClick}> Logout</button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
