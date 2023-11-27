import React from "react";
import { Bar } from "../bar/Bar";
import { Link } from "react-router-dom";

const Register = () => {
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
            <form className="registerForm">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Usuario
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  id="username"
                  //required
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
                  //required
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
                  //required
                  placeholder="**********************"
                />
              </div>
              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#800080", borderColor: "#800080" }}
                >
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Registrarme
                  </Link>
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
