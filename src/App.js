import { HashLink as Link } from 'react-router-hash-link';

import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import Tratamientos from './Components/Tratamientos';
import Promociones from './Components/Promociones';
import Contacto from './Components/Contacto';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Hamburger from './Components/Hamburger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const SmoothScroll = () => (
	<div>
		
	<div className='nav-box'>
	<div class="container">
  <div class="tl"></div>
  <div class="tr"><p className='logo'>Ongizatea</p></div>
  <div class="bl"></div>
  <div class="br">
  <div className="links-box">
			<div className='link'><AnchorLink href='#inicio'>Inicio</AnchorLink></div>
			<div className='link'><AnchorLink href='#promociones'>Promociones</AnchorLink></div>
			<div className='link'><AnchorLink href='#tratamientos'>Tratamientos</AnchorLink></div>
			<div className='link'><AnchorLink href='#contacto'>Contacto</AnchorLink></div>
		</div>
  </div>
</div>
	

		
	</div>
	<div>
		<section id='inicio'>
			
		</section>
		<section id='promociones'>
			<Promociones></Promociones>
	    </section>
		<br></br>
             <br></br>
		<section id='tratamientos'>
			<Tratamientos></Tratamientos>
		</section>
		<section id='contacto'>
			<Contacto/>
		</section>
	</div>
	</div>
	
)

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: ''
		};
		this.childHandler = this.childHandler.bind(this)
	}
	childHandler(dataFromChild){
		this.setState({
			data: dataFromChild
		}, () => console.log(this.state))
	}
	render() {
		return (
			<>
				<Hamburger/>

				
				<SmoothScroll/>
			</>
		);
	}
}

export default App;
