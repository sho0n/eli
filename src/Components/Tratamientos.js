import { render } from '@testing-library/react';
import React from 'react';
import Depilacion from '../Assets/depilacion.jpg';
import Navbar from './Navbar';

class Tratamientos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ''
        }
    }

    render() {
        return (
            <>
            <div className='promo-title-box'><h1 className='promo-title'>TRATAMIENTOS</h1></div> 
                <div className='grid-tratamientos'>
                <div className='box'>
                    <h1 className='title'>Depilacion</h1>
                    <div className='text'>
                        <p>Diseno de cejas ............................ 10€</p>
                        <p>Facial (1 zona).............................  9€</p>
                        <p>Facial completo ............................ 24€</p>
                        <p>Piernas completas .......................... 24€</p>
                        <p>Medias piernas ............................. 14€</p>
                        <p>Brazos ..................................... 17€</p>
                        <p>Pecho o espalda ............................ 24€</p>
                        <p>Ingles .................................. 10/15€</p>
                        <p>Axilas ...................................... 9€</p>
                        <p>Tratamiento ampollas retardo crecimiento .... 5€</p>
                        <br></br>
                    </div>                   
                </div>

                <div className='box-v'>
                    <h1 className='title'>Manicura / Pedicura</h1>
                    <div className='text-v'>
                        <p>Manicura completa ......................... 16€</p>
                        <p>Manicura normal, solo esmaltado ........... 10€</p>
                        <p>Manicura larga duracion, completa ......... 22€</p>
                        <p>Manicura larga duracion, solo esmaltado ... 12.50€</p>
                        <p>Pedicura completa ......................... 25€</p>
                        <p>Pedicura normal solo esmaltado ........... 12.50€</p>
                        <p>Pedicura larga duracion, completa  ....... 30€</p>
                        <p>Pedicura larga duracion, solo esmaltado .. 17€</p>
                        <p>+ Tratamiento recuperador ................. 5€</p>
                        <p>+ Exfoliacion con masaje .................. 10€</p>
                        <p>+ Mascarilla hidratante ................... 10€</p>
                        <p>+ Ilustraciones ........................... 10€</p>
                        <br></br>
                    </div>                   
                </div>
                <div className='box'>
                    <h1 className='title'>Tratamientos faciales</h1>
                    <div className='text'>
                        <p>Tinte y permanente de pesta;as ............. 40€</p>
                        <p>Lifting y tinte de pestanas ................ 45€</p>
                        <p>Estensiones de pestanas pelo a pelo ........ 60€</p>
                        <p>Extensiones de pesta;as con volumen ........ 70/75€</p>
                        <p>Maquillaje profesional ..................... 25/30€</p>
                        <p>Higiene facial profunda .................... 45€</p>
                        <p>Peeling ultrasonico ........................ 45€</p>
                        <p>Tratamiento lifting hidratante ............. 55€</p>
                        <p>Tratamiento para piel acneica .............. 50€</p>
                        <p>Tratamiento despigmentante ................. 60€</p>
                        <p>Tratamiento antiojeras ..................... 25€</p>
                        <p>Tratamiento rejuvenedor de escote .......... 30€</p>
                        <p>Radiofrecuencia facial ..................... 40€</p>
                        <p>Fototerapia ................................ 60€</p>
                        <p>Tratamiento beauty global plan premium ..... 70€</p>
                        <br></br>
                    </div>                   
                </div>
                <div className='box-v'>
                    <h1 className='title'>Masajes</h1>
                    <div className='text-v'>
                        <p>Masaje relajante completo 60" ............ 40€</p>
                        <p>Masaje relajante espalda o piernas 30" ... 25€</p>
                        <p>Masaje relajante express completo 45" .... 30€</p>
                        <p>Masaje craneo-facial 45" ................. 30€</p>
                        <p>Masaje relajante ritual 60" .............. 60€</p>
                        <p>Masaje deportivo completo 60" ............ 40€</p>
                        <p>Masaje deportivo espalda o piernas 30" ... 25€</p>
                        <p>Masaje con pistola percutor 60" .......... 50€</p>
                        <p>Masaje terapeutico completo 90" .......... 60€</p>
                        <p>Masaje circulatorio 60" .................. 30€</p>
                        <p>Reflexologia podal 45" ................... 40€</p>
                        <p>Maderoterapia 60" ........................ 60€</p>
                        <p>Drenaje linfatico 60" .................... 40€</p>
                        <p>Masaje geriatrico 60" .................... 40€</p>
                        <p>Masaje relajante para parejas 60" ........ 70€</p>
                        <p>Masaje pareja + bebida y aperitivo 90" ... 100€</p>
                        <p>Masaje moldeador anticelulitico 60" ...... 60€</p>
                        <br></br>
                    </div>                   
                </div>
                <div className='box'>
                    <h1 className='title'>Tratamientos corporales</h1>
                    <div className='text'>
                        <p>Presoterapia ............................. 20€</p>
                        <p>PresoSlim anticelulitico de calor ........ 30€</p>
                        <p>PresoFrezz aplicacion de gel frio ........ 30€</p>
                        <p>Presolux con masaje craneal .............. 55€</p>
                        <p>Radiofrecuencia con vacumterapia ......... 50€</p>
                        <p>Vacumterapia ............................. 40€</p>
                        <p>Levantamiento de senos o gluteos ......... 40€</p>
                        <p>Electroestimulacion 2 zonas .............. 30€</p>
                        <p>Electroestimulacion + presoterapia ....... 40€</p>
                        <p>Cavitacion 1 zona ........................ 40€</p>
                        <p>Radiofrecuancia .......................... 40€</p>
                        <br></br>
                    </div>   
                    </div>                
                </div>   
            </>
        );
    }
}

export default Tratamientos;