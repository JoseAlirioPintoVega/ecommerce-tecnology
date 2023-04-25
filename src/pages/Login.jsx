import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    console.log(data);
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login";
    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
      })
      .catch((err) => console.log(err));
    reset({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="example@mail.com"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="*********"
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
