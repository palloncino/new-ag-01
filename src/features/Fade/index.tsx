import React from 'react';
import { animated, useSpring } from '@react-spring/web';

const Fade = ({ children }: any) => {
  const props = useSpring({
    from: { transform: 'scale(0.95)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    reset: true,
  });

  return <animated.div style={props}>{children}</animated.div>;
};

export default Fade;