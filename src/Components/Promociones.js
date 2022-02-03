import React from 'react';
import Preso from '../Assets/Preso.jpg';
import Rf from '../Assets/radiofrecuencia.jpg';
import Cavi from '../Assets/cavitacion.jpg';
import Vacum from '../Assets/vacumterapia.jpg';
import AntiCe from '../Assets/anticelulitico.jpg';
import Reductor from '../Assets/reductor.jpg';
import Reafirmante from '../Assets/reafirmante.jpg';
import Levantamiento from '../Assets/levantamiento.jpg';
import Despigmentante from '../Assets/despigmentante.jpg';
import Premium from '../Assets/premium.jpg';
import Empresas from '../Assets/empresas.jpg';
import Relax from '../Assets/relax.jpg';

class Promociones extends React.Component {
constructor(props) {
	super(props);
	this.state = {
		location: 'promociones'
	}
}
render() {
	return (
		<>
		<div id='promociones' className='promo-title-box'><h1 className='promo-title'>PROMOCIONES</h1></div>
		
			<div class="gridOne">
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
						
						<img src={Preso}  alt='CSS3' className='icons' />

						</div>
						<div className="flip-card-back">
							<br/>
							<br/>
							<p className='bono'>BONO</p>
							<p className='sesiones'>10 SESIONES</p>
							<p className='precio'>100€</p>
						</div>
					</div>
				</div>

				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={Cavi}  alt='CSS3' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<p className='bono'>BONO</p>
							<p className='sesiones'>5 SESIONES - 160€</p>
							<p className='precio'></p>	
							<p className='sesiones'>10 SESIONES - 280€</p>
							<p className='precio'></p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={Reductor}  alt='JavaScript' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<p className='bono'>BONO</p>
							<p className='sesiones'>5 SESIONES - 240€</p>
							<p className='precio'></p>	
							<p className='sesiones'>10 SESIONES - 420€</p>
							<p className='precio'></p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={Rf}  alt='React' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>	
							<p className='bono'>BONO</p>
							<p className='sesiones'>5 SESIONES - 160€</p>
							<p className='precio'></p>	
							<p className='sesiones'>10 SESIONES - 280€</p>
							<p className='precio'></p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={Vacum}  alt='Nodejs' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<p className='bono'>BONO</p>
							<p className='sesiones'>5 SESIONES - 160€</p>
							<p className='precio'></p>	
							<p className='sesiones'>10 SESIONES - 280€</p>
							<p className='precio'></p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={AntiCe}  alt='Java' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<p className='bono'>BONO</p>
							<p className='sesiones'>5 SESIONES - 240€</p>
							<p className='precio'></p>	
							<p className='sesiones'>10 SESIONES - 420€</p>
							<p className='precio'></p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={Reafirmante}  alt='Nodejs' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<p className='bono'>BONO</p>
							<p className='sesiones'>5 SESIONES - 240€</p>
							<p className='precio'></p>	
							<p className='sesiones'>10 SESIONES - 420€</p>
							<p className='precio'></p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={Levantamiento}  alt='Nodejs' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<p className='bono'>BONO</p>
							<p className='sesiones'>5 SESIONES - 240€</p>
							<p className='precio'></p>	
							<p className='sesiones'>10 SESIONES - 420€</p>
							<p className='precio'></p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={Despigmentante}  alt='Nodejs' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<br/>
							<p className='bono'>BONO</p>
							<p className='sesiones'>5 SESIONES</p>
							<p className='precio'>250€</p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={Premium}  alt='Nodejs' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<br/>
							<p className='bono'>BONO</p>
							<p className='sesiones'>5 SESIONES</p>
							<p className='precio'>300€</p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={Empresas}  alt='Nodejs' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<br/>
							<p className='bono'>BONO</p>
							<p className='sesiones'>10 SESIONES</p>
							<p className='precio'>300€</p>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<img src={Relax}  alt='Nodejs' className='icons' />
						</div>
						<div className="flip-card-back">
							<br/>
							<br/>
							<p className='bono'>BONO</p>
							<p className='sesiones'>10 SESIONES</p>
							<p className='precio'>250€</p>
						</div>
					</div>
				</div>
			</div>
		</>
       );
    }
}

export default Promociones;