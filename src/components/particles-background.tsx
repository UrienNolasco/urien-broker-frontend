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
      {" "}
      {/* Container essencial */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // Desabilitado para usar o container do Tailwind
          background: {
            color: {
              value: "#0f0f0f", // Mudei para transparente
            },
          },
          particles: {
            number: {
              value: 100, // Aumentei o número de partículas
            },
            color: {
              value: "#ffffff", // Azul mais visível (Tailwind blue-500)
            },
            opacity: {
              value: 0.7, // Aumentei a opacidade
            },
            size: {
              value: 2,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.7, // Reduzi a velocidade
              direction: "bottom",
              outModes: {
                default: "out",
              },
            },
          },
          detectRetina: true,
        }}
        className="w-full h-full" // Garante o tamanho
      />
    </div>
  );
};

export default ParticlesBackground;
