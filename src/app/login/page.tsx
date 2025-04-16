import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/login-form";
import ParticlesBackground from "@/components/particles-background";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background animado fixo */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Conteúdo por cima */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <a
            href="#"
            className="flex items-center gap-2 self-center font-medium text-white"
          >
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Urien Broker.
          </a>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
