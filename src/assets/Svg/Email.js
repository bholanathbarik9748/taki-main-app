import React from 'react';
import { Svg, Path } from 'react-native-svg';

const EmailIcon = () => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={24} height={24}>
        <Path
            fill="#00adb5"
            d="M60,28a2,2,0,0,0-2,0L32,42.7,6,28a2,2,0,0,0-3,1.74V47a6,6,0,0,0,6,6H55a6,6,0,0,0,6-6V29.75A2,2,0,0,0,60,28Z"
        />
        <Path
            fill="#00adb5"
            d="M55,11H9a6,6,0,0,0-6,6v3.75a2,2,0,0,0,1,1.74L31,37.74a2,2,0,0,0,2,0L60,22.49a2,2,0,0,0,1-1.74V17A6,6,0,0,0,55,11Z"
        />
    </Svg>
);

export default EmailIcon;
