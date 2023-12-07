// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import UndrawAnimation from '../../assets/undraw_void_-3-ggu.svg';

const NotificationNull = (props) => {
    return (
        // eslint-disable-next-line react/prop-types
        <div className={`${props.className}`}>
            <img className='undrawImg' src={UndrawAnimation} alt="undraw_animation"/>
            {/*<h1 className='undrawText'>Oops, no data found!</h1>*/}
        </div>
    );
}

export default NotificationNull;