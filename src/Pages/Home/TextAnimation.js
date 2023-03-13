import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
    return (
        <TypeAnimation
        // Same String at the start will only be typed once, initially
        sequence={[
        'Chooose Your best Laptop Asus',
        1000,
        'Chooose Your best Laptop Apple MacBook',
        1000,
        'Chooose Your best Laptop HP',
        1000,
        'Chooose Your best Laptop Lenovo',
        1000,
        ]}
        speed={50} // Custom Speed from 1-99 - Default Speed: 40
        style={{ fontSize: '2em',color:'blue' }}
        wrapper="span" // Animation will be rendered as a <span>
        repeat={Infinity} // Repeat this Animation Sequence infinitely
      />
    );
};

export default TextAnimation;