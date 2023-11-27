import React from "react";
import { Link } from "react-router-dom";
import { Bar } from "../bar/Bar";

const Login = () => {
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
            <form className="loginForm">
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
                  placeholder="***********************"
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit" style={{ backgroundColor: '#800080', borderColor: '#800080' }}>
                  <Link to="/perfil" style={{ textDecoration: "none", color: "white" }}>Iniciar Sesión</Link>
                </button>
              </div>
              <p className="mt-3" style={{ textAlign: "center" }}>
                ¿No tienes una cuenta? Regístrate{" "}
                <Link style={{ color: "#800080", textDecoration: 'none' }} to="/register">
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

export default Login;
