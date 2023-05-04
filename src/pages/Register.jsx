import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../css/register.css";

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
    <div className="register-container">
      <div className="img__register"></div>
      <form className="form__register">
        <div className="div-form__register">
          <label className="label__register" htmlFor="name">
            Name
          </label>
          <input
            className="input__register"
            type="text"
            {...register("name")}
          />
        </div>
        <div className="div-form__register">
          <label className="label__register" htmlFor="lastname">
            last name
          </label>
          <input
            className="input__register"
            type="text"
            {...register("lastname")}
          />
        </div>
        <div className="div-form__register">
          <label className="label__register" htmlFor="email">
            email
          </label>
          <input
            className="input__register"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="div-form__register">
          <label className="label__register" htmlFor="password">
            password
          </label>
          <input
            className="input__register"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="div-form__register">
          <label className="label__register" htmlFor="phone">
            phone
          </label>
          <input
            className="input__register"
            type="number"
            {...register("phone")}
          />
        </div>
        <div className="div-form__register">
          <label className="label__register" htmlFor="role">
            Role
          </label>
          <input
            className="input__register"
            type="text"
            {...register("role")}
          />
        </div>
        <button className="btn-register">Register</button>
      </form>
      <div className="img__register"></div>
    </div>
  );
};

export default Register;
