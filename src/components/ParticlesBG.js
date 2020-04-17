import React from 'react';
import Particles from 'react-particles-js';

const ParticleBG = () => (
  <Particles
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -3,
    }}
  />
);

export default ParticleBG;
