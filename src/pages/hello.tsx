import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Hello: React.FC = () => {
  const router = useRouter();
  const { user } = router.query;

  const handleContinue = () => {
    // Redireciona para a página /sobre
    router.push("/sobre");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundColor: "#1a1a1a", 
        backgroundImage: `radial-gradient(circle, rgba(255,215,0,0.1) 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
        color: "#d4af37", 
      }}
    >
      <div className="bg-black bg-opacity-70 rounded-lg shadow-xl p-10 text-center border border-yellow-600 max-w-lg">
        <h1
          className="text-4xl font-serif mb-4"
          style={{ color: "#d4af37", letterSpacing: "1px" }}
        >
          👋 Hello World {user}!
        </h1>
        <p className="text-lg mb-6 text-gray-200">
          Eu sou <span className="font-bold text-yellow-400">Lisandra</span>, e estou animada para te conhecer. 
          Vou apresentar minha jornada para você enquanto te entrego algumas cartas, ok?
        </p>

        {/* Lisandra VS User */}
        <div className="flex items-center justify-center gap-8 mb-6">
          {/* Lisandra */}
          <div className="flex flex-col items-center">
            <div
              className="rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-md"
              style={{ backgroundColor: "#d4af37", color: "#1a1a1a" }}
            >
              L
            </div>
            <span className="mt-2 font-semibold text-yellow-400">Lisandra</span>
          </div>

          {/* VS image */}
          <div className="flex items-center justify-center">
            <Image
              src="/vs.png" 
              alt="Versus"
              width={60}
              height={60}
            />
          </div>

          
          <div className="flex flex-col items-center">
            <div
              className="rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-md"
              style={{ backgroundColor: "#d4af37", color: "#1a1a1a" }}
            >
              {user?.toString().charAt(0).toUpperCase()}
            </div>
            <span className="mt-2 font-semibold text-yellow-400">{user}</span>
          </div>
        </div>

        <p className="text-base text-gray-300">
          Vamos começar? Clique no botão abaixo para continuar.
        </p>
        <button
          onClick={handleContinue}
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-8 rounded-full transition duration-300 shadow-lg"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Hello;
