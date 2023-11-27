import React, { useState } from "react";
import { Bar } from "../bar/Bar";
import { Link } from "react-router-dom";

const Register = () => {
  // Estado local para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para enviar los datos al servidor
    // Puedes utilizar una función como fetch o axios para realizar la solicitud POST

    fetch("http://localhost:8000/usuarios/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes manejar la respuesta del servidor, por ejemplo, redireccionar a otra página
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Bar />
      <div className="container">
        <div className="mt-4 border border-2 p-4 rounded col-6 mx-auto">
          <div className="mt-2">
            <h1 className="text-center" style={{ color: "#800080" }}>
              Regístrate
            </h1>
          </div>
          <div className="mt-4">
            <form className="registerForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Usuario
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre"
                />
              </div>
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
                  placeholder="**********************"
                />
              </div>
              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#800080", borderColor: "#800080" }}
                >
                  Registrarme
                </button>
              </div>
              <p className="mt-3" style={{ textAlign: "center" }}>
                ¿Ya posees una cuenta? Inicia sesión{" "}
                <Link
                  style={{ color: "#800080", textDecoration: "none" }}
                  to="/login"
                >
                  AQUÍ
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
