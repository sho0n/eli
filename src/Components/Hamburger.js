import React, { Component } from 'react';
import Menu from '../Assets/menu.png';

class Hamburger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 'true',
            newState: 'show'
        };
    }
    changeState() {
        this.setState(prevState => (
            {
                clicked: !prevState.clicked,
                newState: this.state.clicked ? 'show' : 'hide'
            }
        ));
    }
    render() {
        return (
            <>
                <div onClick={(e) => this.changeState(e)}>
                    <img onClick={() => this.props.action(`${this.state.newState}`)} src={Menu} className='menuIcon' alt='menu icon' ></img>
                </div>
            </>
        );
    }
}
export default Hamburger;