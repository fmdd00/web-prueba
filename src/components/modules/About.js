import React from "react";
import { Bar } from "../bar/Bar";

const About = () => {
  return (
    <>
      <Bar />
      <div className="container mt-4">
        <h1 className="" style={{ color: "#800080" }}>Acerca de</h1>
        <p className="fs-5">
          Este es un trabajo de fin del curso de ARQUITECTURA DE SOFTWARE. Sección 1003.
        </p>
        <div style={{ textAlign: "justify" }}>
          <div className="mb-4">
            <h2>Integrantes</h2>
            <ul className="list-group">
              <li className="list-group-item">Javier Enrique Olazábal Silva</li>
              <li className="list-group-item">Lelis Raquel Atencia Mondragón</li>
              <li className="list-group-item">Angel Cuya Sanchez</li>
              <li className="list-group-item">Francisco Manuel Díaz Delgado</li>
            </ul>
          </div>
          <div className="mt-2">
            <h2>Tema de proyecto: Juez en línea</h2>
            <p>Para el trabajo en grupo hemos definido utilizar como tema de trabajo la arquitectura de un software como lo es un juez online, como lo es BOCA, Codeforces, UVA, etc.</p>
          </div>
          <div className="mt-2">
            <h2>UliTorneos</h2>
            <p>Ulitorneos es una plataforma virtual con sede en Lima. Se dedica a ofrecer una experiencia de competencia en línea, similar a un "online judge", que permite a los participantes involucrarse en torneos de programación y desafíos similares. Su enfoque se encuentra en la virtualidad, lo que significa que opera en un entorno completamente en línea, lo que facilita la participación desde cualquier ubicación geográfica.</p>
          </div>
          <div className="mt-2">
            <h2>Modelo de negocio:</h2>
            <p>El modelo de negocio de la empresa se centra principalmente en generar ingresos a través de suscripciones premium, ofreciendo a los usuarios una versión mejorada y más completa de su plataforma o servicio a cambio de una tarifa periódica. El tipo de negocio sería B2B. Los usuarios serían las instituciones que quieran llevar a cabo los torneos.</p>
          </div>
          <div className="mt-2">
            <p>Objetivos de negocio:</p>
            <p>- Desarrollar una plataforma funcional y atractiva que ofrezca la experiencia de competencia en línea.</p>
            <p>- Probar la plataforma con un grupo inicial de usuarios para identificar posibles problemas y realizar mejoras.</p>
            <p>- Concentrar esfuerzos en atraer los primeros usuarios y construir una base de usuarios sólida.</p>
            <p>- Ofrecer un entorno de creacion de concursos mas el compilador de juez, asi como el uso de datos para marketing.</p>
            <p>- Contactar a programadores destacadas en base a logros en la plataforma</p>
          </div>
        </div>
        <div className="mt-2">
          <h2>Stakeholders</h2>
          <div className="container mt-2">
            <table className="table">
              <thead>
                <tr>
                  <th>Rol</th>
                  <th>Encargado</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cliente</td>
                  <td>Organizaciones</td>
                  <td style={{ textAlign: "justify" }}>La institución organizadora que utiliza la plataforma para crear y gestionar hackathons. Son responsables de configurar competencias, establecer reglas y proporcionar desafíos a los participantes.</td>
                </tr>
                <tr>
                  <td>Usuario</td>
                  <td>Organizaciones y participantes</td>
                  <td style={{ textAlign: "justify" }}>Los participantes en los hackathons, que pueden ser estudiantes de programación o programadores experimentados. Utilizan la plataforma para competir, enviar sus soluciones y recibir retroalimentación sobre sus códigos.</td>
                </tr>
                <tr>
                  <td>Gestor de negocio</td>
                  <td>Javier Olazabal</td>
                  <td style={{ textAlign: "justify" }}>Encargado de la gestión estratégica y operativa de la plataforma. Definen las estrategias de crecimiento, colaboraciones y acuerdos comerciales con las instituciones organizadoras. Aseguran que la plataforma satisfaga las necesidades de los clientes.</td>
                </tr>
                <tr>
                  <td>Arquitecto de software</td>
                  <td>Lelis Atencia</td>
                  <td style={{ textAlign: "justify" }}>Diseña la estructura de la plataforma, incluyendo la arquitectura técnica y la infraestructura necesaria para soportar la carga de trabajo. Toma decisiones técnicas clave para garantizar la escalabilidad y la eficiencia.</td>
                </tr>
                <tr>
                  <td>Implementador e integrador</td>
                  <td>Francisco Díaz</td>
                  <td style={{ textAlign: "justify" }}>Responsable de desarrollar, implementar y mantener las características técnicas de la plataforma. Codifican las funcionalidades requeridas, integran sistemas externos y aseguran que todo funcione correctamente.</td>
                </tr>
                <tr>
                  <td>Responsable de mantenimiento</td>
                  <td>Angel Cuya</td>
                  <td style={{ textAlign: "justify" }}>Encargado de mantener y actualizar la plataforma en funcionamiento. Esto implica la solución de problemas técnicos, la aplicación de actualizaciones de seguridad y el monitoreo constante para garantizar el rendimiento y la disponibilidad.</td>
                </tr>
                <tr>
                  <td>Performance Checker</td>
                  <td>Javier Olazabal</td>
                  <td style={{ textAlign: "justify" }}>Supervisa y gestiona la evaluación de los códigos enviados por los participantes. Realiza pruebas de compilación y ejecución para verificar la precisión y eficiencia de las soluciones. Contribuye a la imparcialidad y calidad de la plataforma al garantizar una evaluación precisa de los outcomes de los participantes.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
