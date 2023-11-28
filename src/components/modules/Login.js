//import React from "react";
import { Link } from "react-router-dom";
import { Bar } from "../bar/Bar";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD
      const response = await fetch("http://localhost:8000/usuarios/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
  
=======
      const response = await fetch(
        "http://localhost:8000/usuarios/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

>>>>>>> b4201a0c924286d947d8046de8eaf0496669faa9
      // Check if the response status is in the range 200-299 (indicating success)
      if (response.ok) {
        // Parse the response JSON if there's any data
        const responseData = await response.json();

        // Assuming the server responds with a token on successful login
        const token = responseData.token;
        console.log(response);

        // Perform any additional actions here, e.g., store the token in localStorage

        // Redirect the user to the page "/concursos" after a successful login
        //history.push("/concursos");
      } else {
        // Handle unsuccessful login (e.g., show an error message)
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };
  return (
    <div>
      <Bar />
      <div className="container">
        <div className="mt-4 border border-2 p-4 rounded col-6 mx-auto">
          <div className="mt-2">
            <h1 className="text-center" style={{ color: "#800080" }}>
              Log In
            </h1>
          </div>
          <div className="mt-4">
            <form className="loginForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="***********************"
                />
              </div>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ backgroundColor: "#800080", borderColor: "#800080" }}
                >
                  Iniciar Sesión
                </button>
              </div>
              <p className="mt-3" style={{ textAlign: "center" }}>
                ¿No tienes una cuenta?{" "}
                <Link
                  className="fw-bold"
                  style={{ color: "#800080", textDecoration: "none" }}
                  to="/register"
                >
                  Regístrate
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
