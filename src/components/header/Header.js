import React from 'react'
import './Nav.css'

class Header extends React.Component {
    myFunction(e){
        console.log(e.target.innerText);
    }
    render() {
    return (
        <nav>
            <ul>
                <button onClick={this.myFunction}>Accueil</button>
                <button onDoubleClick={this.myFunction}>About</button>
                <button onMouseOver={this.myFunction}>Shop</button>
                <button onClick={this.myFunction}>Menu</button>
            </ul>
        </nav>
    )
}
}

export default Header
