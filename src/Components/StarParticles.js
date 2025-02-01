import React from 'react'
import Particles from "react-tsparticles";
import "./starparticles.css";

export default function StarParticles(){
  return (
    <Particles
      params={{
        background: {
          color: {
            value: "#000"
          }
        },
        particles: {
          color: {
            value: "#D5AB55"
          },
          number: {
            value: 160,
            density: {
              enable: false
            }
          },
          size: {
            value: 3,
            random: true
          },
          move: {
            // direction: "bottom",
            outMode: "out"
          },
          links: {
            enable: false
          }
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "remove"
            }
          },
          modes: {
            remove: {
              quantity: 10
            }
          }
        }
      }}
    />
  )
}
