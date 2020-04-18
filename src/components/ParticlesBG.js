import React from 'react';
import Particles from 'react-particles-js';
/* 
Written by: Tony Zhao on 2020-04-16
Params provided from https://vincentgarreau.com/particles.js/
 */

const ParticleBG = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 550,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 12,
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 0,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'bottom-right',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: {
            enable: true,
            mode: 'grab',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 110,
            line_linked: {
              opacity: 0.5,
            },
          },
          bubble: {
            distance: 400,
            size: 5,
            duration: 2,
            opacity: 1,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    }}
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
