import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/login-form";
import ParticlesBackground from "@/components/particles-background";

export default function LoginPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Conteúdo ajustado */}
      <div className="relative  flex h-full flex-col p-6 md:p-10">

        {/* Formulário centralizado verticalmente */}
        <div className="flex justify-center text-white">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Urien Broker.
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
