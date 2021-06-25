import React from 'react'
import './Nav.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log(`Vous avez cliqué ${this.state.count} fois`);    }

    componentDidUpdate() {
        console.log(`Vous avez cliqué ${this.state.count} fois`);
        
    }

    render() {
        return (
            <nav>
                <ul>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>Accueil</button>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>About</button>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>Shop</button>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>Menu</button>
                </ul>
            </nav>
        )
    }
}

export default Header