import React from 'react';
// import classes from '*.module.css';
import './Logo.css';
import expenseLogo from '../assets/images/expense.PNG';
// import classes from './Logo.css';

const logo=(props)=>(
    <div className="Logo">
        <img src={expenseLogo} alt="MYexpense" />
    </div>
);

export default logo;