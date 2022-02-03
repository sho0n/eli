import React from 'react';


class Contacto extends React.Component {

render() {
        return (
            <>
            <div id='contacto' className='promo-title-box'><h1 className='promo-title'>CONTACTO</h1></div>

            <div className='grid-container_Contact'>

                <div className="Contact">
                    <a className="contactLink" href="mailto:shon.sanches@gmail.com">
                        <i class="fa fa-envelope-open fa-lg"></i>
                                            ongizateavitoria@gmail.com
                                        </a>
                </div>
                <div className="Contact">
                    <a className="contactLink" href="https://www.instagram.com/eli_masajista/">
                        <i class="fa fa-instagram fa-lg"></i>
                                            Instagram
                                        </a>
                </div>
                <div className="Contact">

                    <a className="contactLink" href="https://www.facebook.com/ongizateavitoria/">
                        <i class="fa fa-facebook fa-lg"></i>
                                            Facebook
                                        </a>


                </div>
            </div>
            </>
        );
    }
}

export default Contacto;