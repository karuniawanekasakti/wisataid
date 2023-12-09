// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import UndrawAnimation from '../../assets/undraw_page_not_found_re_e9o6.svg';
import './NotificationNull.css';
const NotificationNull = () => {
    return (
        <div className='undrawContainer'>
            <img className='undrawImg' src={UndrawAnimation} alt="undraw_animation"/>
            {/*<h1 className='undrawText'>Opps, data not found</h1>*/}
        </div>
    );
}

export default NotificationNull;