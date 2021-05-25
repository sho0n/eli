import { HashLink as Link } from 'react-router-hash-link';

import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import Tratamientos from './Components/Tratamientos';
import Promociones from './Components/Promociones';
import Contacto from './Components/Contacto';
import Main from './Assets/main.jpg';
import Main2 from './Assets/spa.png';
import Hamburger from './Components/Hamburger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: ''
		};
		this.childHandler = this.childHandler.bind(this)
	}
	childHandler(dataFromChild) {
		this.setState({
			data: dataFromChild
		}, () => console.log(this.state))
	}
	targetRef = React.createRef();

	componentDidMount = () => {
		console.log(this.props)
	}

	scrollToTarget = () => {
		setTimeout(() => {
			this.targetRef.scrollIntoView({
				behavior: 'smooth'
			})
		}, 500);
	}

	render() {
		return (
			<>
			 <head>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

      <script src="https://kit.fontawesome.com/df47df994c.js" crossorigin="anonymous"></script>      </head>
				<Router>
					<Hamburger action={this.childHandler} />
					<div className={this.state.data} >
						<Navbar scrollToTarget={this.scrollToTarget}></Navbar>
					</div>
					<img className='cover' src={Main} />
					<div ref={ref => { this.targetRef = 'tratamientos' }} ><Tratamientos /></div>
					<div ref={ref => { this.targetRef = ref }} ><Promociones/></div>
					<div ref={ref => { this.targetRef = ref }} ><Contacto/></div>
					<Switch>
						<Route exact path="/" component='' />
						<Route exact path="/tratamientos" component='' />
						<Route exact path="/promociones" component='' />
						<Route exact path="/contacto" component='' />
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;
