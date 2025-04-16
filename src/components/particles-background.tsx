"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "#0f0f0f",
            },
          },
          particles: {
            number: {
              value: 150, // Mais partículas
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            opacity: {
              value: 0.6,
              random: true, // Opacidade aleatória
            },
            size: {
              value: { min: 1, max: 3 }, // Tamanhos variados
            },
            move: {
              enable: true,
              speed: { min: 1, max: 3 }, // Velocidade aleatória e mais rápida
              direction: "none", // Sem direção fixa
              random: true,
              straight: false, // Movimento mais "solto"
              outModes: {
                default: "out",
              },
            },
          },
          detectRetina: true,
        }}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticlesBackground;
