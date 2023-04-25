import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { handleSubmit, register, reset } = useForm();

  /* useEffect(() => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users";
    const data = {
      firstName: "josesiño",
      lastName: "pintiño",
      email: "josesito@gmail.com",
      password: "pass1234",
      phone: "1234567891",
      role: "admin",
    };
    axios
      .post(URL, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []); */
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="lastname">last name</label>
          <input type="text" {...register("lastname")} />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" {...register("password")} />
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <input type="number" {...register("phone")} />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <input type="text" {...register("role")} />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
