import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children,isGooglesingIn, ...otherProps})=>(
    <button className={`${isGooglesingIn ? 'google-sign-in' : ''}
    custom-button`} {...otherProps}>
       {children}
    </button>
)

export default CustomButton;