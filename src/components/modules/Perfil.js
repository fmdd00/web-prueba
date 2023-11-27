import React from "react";
import BarLog from "../bar/BarLog";
import { Link } from "react-router-dom";

const Perfil = () => {
  return (
    <>
      <BarLog />
      <div className="container mt-4">
        <div className="mb-4">
          <h1 className="mb-4" style={{ color: "#800080" }}>
            Mi Perfil
          </h1>
        </div>
        <div className="mt-4 border border-2 p-4 rounded col-6 mx-auto">
          <div className="mt-2">
            <h1 className="text-center" style={{ color: "#800080" }}>
              Modifica tus datos de usuario
            </h1>
          </div>
          <div className="mt-4">
            <form className="" onSubmit="{handleSubmit}">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombres
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div className="mb-3">
                {/*El país puede ser una lista de países también, pero por el momento es un textfield*/}
                <label htmlFor="email" className="form-label">
                  País
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="country"
                  id="country"
                  required
                  placeholder="Perú"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Número de celular
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="number"
                  id="number"
                  required
                  placeholder="900 900 900"
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
                  required
                  placeholder="**********************"
                />
              </div>
              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#800080", borderColor: "#800080" }}
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
