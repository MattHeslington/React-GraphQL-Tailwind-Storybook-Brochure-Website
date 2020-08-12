import React, { Component } from 'react'
import IconCross from 'components/site/IconCross'
import IconBurger from 'components/site/IconHamBurger'

export class Hamburger extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        return (
            <button onClick={this.toggle} type="button" className="px-2 text-uvBlack focus:outline-none">
                {this.state.isOpen ? <IconCross/> : <IconBurger/> }
            </button>
        )
    }
}

export default Hamburger
