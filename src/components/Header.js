import React,{Component} from 'react';
import './Header.css';
import Logo from '../logo/Logo';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <Logo/>
                <h1>EXPENSE MANAGEMENT SYSTEM</h1>
            </div>
        );
    }
}


export default Header;