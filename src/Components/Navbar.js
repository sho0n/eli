import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    constructor() {
        super();
    }
    handleScroll = () => {
        if (this.props.scrollToTarget) {
            this.props.scrollToTarget()
        }
    }
    render() {
        return (
            <div className='nav-box' onClick={this.handleScroll}>
                <div className="links-box">
                    <div className='link'><Link to="/">Home</Link></div>
                    <div className='link'>
                        <Link to={{
                            pathname: './tratamientos',
                            state: {
                                fromBanner: ''
                            }
                        }}>Tratamientos
                    </Link>
                    </div>
                    <div className='link'><Link to={{
                        pathname: './promociones',
                        state: {
                            fromBanner: ''
                        }
                    }}>Promociones</Link></div>
                    <div className='link'><Link to={{
                        pathname: './contacto',
                        state: {
                            fromBanner: false
                        }
                    }}>Contacto</Link></div>

                </div>

            </div>
        );
    }
}
export default Navbar;