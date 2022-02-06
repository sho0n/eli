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
                <div className='mainmobile' >
                </div>
            </>
        );
    }
}
export default Hamburger;