
import './App.css'

import pokedex from './assets/pokedex.png'
import jardin from './assets/jardin.png'
import minidbeaver from './assets/minidbeaver.png'
import redsocial from './assets/redsocial.png'


function App() {
  return (
    <div>
      <header className="header">
        <h2 className="logo">Mi Portafolio</h2>

        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      
<main>
  <section id="inicio" className="inicio">
    <div className="presentacion">
      <p className="saludo">Bienvenido a mi portafolio</p>

      <h1>Soy Gladys Candy Chumá Pérez</h1>

      <h2>Estudiante de Ingeniería en Tecnología de Software</h2>

      <p className="descripcion">
        Me interesa el desarrollo de software y la creación
        de aplicaciones web. En este portafolio comparto
        algunos de los proyectos que he realizado durante
        mi formación académica.
      </p>

      <a href="#proyectos" className="boton">
        Ver mis proyectos
      </a>
    </div>
  </section>


<section id="sobre-mi" className="sobre-mi">
  <h2>Sobre mí</h2>

  <p>
    Soy estudiante de Ingeniería en Tecnología de Software,
    interesada en el desarrollo de aplicaciones y en seguir
    aprendiendo nuevas tecnologías.
  </p>

  <p>
    Durante mi formación académica he trabajado en proyectos
    de desarrollo web, aplicaciones de escritorio y bases de
    datos, poniendo en práctica mis conocimientos de programación.
  </p>

  <h3>Tecnologías y herramientas</h3>

  <div className="habilidades">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>React</span>
    <span>Java</span>
    <span>Python</span>
    <span>SQL</span>
    <span>Git y GitHub</span>
  </div>
</section>


<section id="proyectos" className="proyectos">
  <h2>Mis proyectos</h2>

  <p>
    Estos son algunos de los proyectos que he desarrollado
    durante mi formación académica.
  </p>

  <div className="contenedor-proyectos">

    
  <div className="tarjeta">
    <img
      src={pokedex}
      alt="Captura de la Pokédex Web"
      className="imagen-proyecto"
    />

    <h3>Pokédex Web</h3>
    <p>
      Aplicación web que permite buscar Pokémon y
      consultar su información utilizando PokéAPI.
    </p>
    <span>HTML · CSS · JavaScript</span>
  </div>


    <div className="tarjeta">

      <img
        src={jardin}
        alt="Captura de Un jardín de papel"
        className="imagen-proyecto"
      />

      <h3>Un jardín de papel</h3>
      <p>
        Página web informativa con un diseño responsivo,
        organizada en diferentes secciones.
      </p>
      <span>HTML · CSS · JavaScript</span>
    </div>

    <div className="tarjeta">

      <img
        src={minidbeaver}
        alt="Captura de MiniDBeaver"
        className="imagen-proyecto"
      />

      <h3>MiniDBeaver</h3>
      <p>
        Aplicación de escritorio para trabajar con
        bases de datos mediante una interfaz gráfica.
      </p>
      <span>Java · JavaFX · SQLite</span>
    </div>

    <div className="tarjeta">

      <img
        src={redsocial}
        alt="Captura de la Red Social"
        className="imagen-proyecto"
      />

      <h3>Red Social</h3>
      <p>
        Maqueta responsiva de una red social con
        perfiles, publicaciones y menú de navegación.
      </p>
      <span>HTML · CSS</span>
    </div>

  </div>
</section>


<section id="contacto" className="contacto">
  <h2>Contacto</h2>

  <p>
    Si deseas conocer más sobre mis proyectos
    o ponerte en contacto conmigo, puedes
    encontrarme en GitHub.
  </p>

  <a
    href="https://github.com/GladysCP"
    target="_blank"
    rel="noopener noreferrer"
    className="boton"
  >
    Visitar GitHub
  </a>
</section>

</main>


<footer className="footer">
  <p>© 2026 Gladys Candy Chumá Pérez</p>
  <p>Portafolio personal · Desarrollado con React</p>
</footer>


    </div>
  )
}

export default App
