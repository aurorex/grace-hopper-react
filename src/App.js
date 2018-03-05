import React, { Component } from 'react';
// import logo from './logo.svg';
import './index.css';

 import image from './grace-hopper.jpg';
/* creando componentes para cada estructura*/

// componente para el header
class Header extends React.Component{
  render(){
    return(
      <header>
        <h1>Grace Hopper</h1>
        <hr/>
      </header>
    );
  }
}

// componente para las listas ordenadas
class Ol extends React.Component{
  render(){
    return(
      <ol>
        <li>segunda gerra mundial</li>
        <li>UNIVAC</li>
        <li>COBOL</li>
        <li>estandares</li>
      </ol>
    );
  }
}

// componente que tiene la información más importante
class Main extends React.Component{
  render(){
    return(
      <div className="biography">
        <p><strong>Grace Brewster Murray Hopper</strong> ( née  Murray , 9 de diciembre de 1906 - 1 de enero de 1992) fue un <a href="https://en.wikipedia.org/wiki/Computer_scientist" target="_blank">científico <strong>informático</strong> estadounidense</a> y el almirante de la Armada de los Estados Unidos . Uno de los primeros programadores de la computadora <a href="https://en.wikipedia.org/wiki/Harvard_Mark_I" target="_blank">Harvard Mark I</a> , fue una <mark> pionera en la programación de computadoras que inventó una de las primeras herramientas relacionadas con el compilador</mark> . Ella popularizó la idea de lenguajes de programación independientes de la máquina, lo que llevó al desarrollo de <a href="https://en.wikipedia.org/wiki/COBOL" target="_blank">COBOL</a> , un lenguaje de programación de alto nivel temprano que todavía se usa en la actualidad.</p>
        <p>Hopper había intentado alistarse en la Armada durante la <strong>Segunda Guerra Mundial</strong> , pero fue rechazada por los militares porque tenía 34 años y era demasiado mayor para enrolarse. Ella se unió a las Reservas de la Armada. Hopper comenzó su carrera en informática cuando trabajó en el equipo de <strong>Harvard Mark I</strong>, dirigido por Howard H. Aiken . En 1949, se unió a Eckert-Mauchly Computer Corporation y formó parte del equipo de desarrollo que diseñó la <a href="https://en.wikipedia.org/wiki/UNIVAC_I" target="_blank"> computadora UNIVAC</a> I en 1944. Fue en Eckert-Mauchly donde comenzó a desarrollar el compilador. Ella creía que el código de computadora podría escribirse en inglés usando un lenguaje de programación basado en palabras en inglés. El compilador convertiría ese código en código máquinaeso sería entendido por las computadoras. En 1952, Hopper terminó su compilador, que fue escrito para el lenguaje de programación del Sistema A-0.</p>
        <p>En 1954, Eckert-Mauchly eligió a Hopper para liderar su departamento de programación automática, y dirigió el lanzamiento de algunos de los primeros lenguajes compilados como <a href="https://en.wikipedia.org/wiki/FLOW-MATIC" target="_blank">FLOW-MATIC</a> . En 1959, ella participó en el consorcio <strong>CODASYL</strong> , que consultó a Hopper para guiarlos en la creación de un lenguaje de programación independiente de la máquina. Esto condujo al lenguaje COBOL , que se inspiró en su idea de que un idioma se basara en palabras en inglés. En 1966, se retiró de la Reserva Naval, pero en 1967, la Armada la retiró al servicio activo. Se retiró de la Marina en 1986 y encontró trabajo como consultora de Digital Equipment Corporation , compartiendo sus experiencias de computación.</p>
        <p>Debido a sus logros y su rango naval, a veces se la llamaba "Grace asombrosa".La Marina de los EE. UU. Arleigh Burke, destructora de misiles guiados de clase USS  Hopper, fue nombrada por ella, al igual que la supercomputadora Cray XE6 "Hopper" en el NERSC . Durante su vida, Hopper recibió 40 títulos honoríficos de universidades de todo el mundo. En 1991, recibió la Medalla Nacional de Tecnología . El 22 de noviembre de 2016, fue premiada póstumamente con la Medalla Presidencial de la Libertad por el presidente Barack Obama  le otorgó la <strong>Medalla Presidencial de la Libertad a título póstumo</strong> .  </p>

        <h3>carrera</h3>
        <Ol/>
        <h2>frase</h2>
        <blockquote cite="http://es.wikiquote.org/wiki/Grace_Hopper">
          «Los seres humanos son alérgicos a los cambios. Les encanta decir: "Siempre lo hemos hecho así". Trato de luchar contra eso. Es por eso por lo que tengo un reloj de pared cuyas agujas se mueven en sentido contrario».
        </blockquote>

        <a href="informacion.html" target="_blank">primeros años y educación</a>
      </div>
    );
  }
}

// componentes para la tabla
class Thead extends React.Component{
  render(){
    return(
      <thead>
        <tr>
          <th colSpan="2">Grace Murray Hopper</th>
        </tr>
      </thead>
    );
  }
}

class Tbody extends React.Component{
  render(){
    return(
      <tbody>
        <tr>
          <td style={{border: '1px solid white', textAlign:'center',padding:'10px'}} colSpan="2">
            <img src={image} alt="grace hopper"/>
            <p>Contraalmirante Grace M. Hopper, 1984</p>
            <hr/>
          </td>
        </tr>
        <tr>
          <th>Apodo (s)</th>
          <td>"Increíble gracia"</td>
        </tr>
        <tr>
          <th>Nacido</th>
          <td>9 de diciembre de 1906
            Ciudad de Nueva York, Nueva York, EE. UU.</td>
        </tr>
        <tr>
          <th>Murió</th>
          <td>1 de enero de 1992 (de 85 años) Arlington, Virginia , EE. UU.</td>
        </tr>
        <tr>
          <th>Servicio / sucursal</th>
          <td> Armada de los Estados Unidos</td>
        </tr>
        <tr>
          <th>Lealtad</th>
          <td>Estados Unidos de America</td>
        </tr>
        <tr>
          <th>Años de servicio</th>
          <td>1943-1966, 1967-1971, 1972-1986</td>
        </tr>
        <tr>
          <th>Rango</th>
          <td> Almirante trasero (mitad inferior)</td>
        </tr>
        <tr>
          <th>Premios</th>
          <td>Medalla por Servicio Distinguido de Defensa legión de mérito medalla de servicio meritoria estadounidense medalla de la campaña de la Segunda Guerra Mundial de la Victoria Medalla Nacional de Defensa medalla de servicio de las Fuerzas Armadas Medalla de la Reserva con dos de reloj de arena dispositivos Medalla Reserva Naval Medalla Presidencial de la Libertad (póstuma)</td>
        </tr>
      </tbody>
    );
  }
}

// componente para barra lateral que tiene información secundaria
class Aside extends React.Component{
  render(){
    return(
      <div  className="summary">
        <table>
          <Thead/>
          <Tbody/>
        </table>
      </div>
    );
  }
}

// 
class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Main/>
        <Aside/>
      </div>
    );
  }
}

export default App;

// ReactDOM.render(<App/>, document.getElementById('main'));
// class App extends Component {
//   render() {
//     return (
//       <Header/>,
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }