import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const AboutMe: React.FC = () => {
  const router = useRouter();

  const handleKnowMore = () => {
    
    router.push("/about");
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center gap-8 p-8"
      style={{ backgroundColor: "#1a1a1a", color: "#d4af37" }}
    >
      {/* Foto */}
      <div className="rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg">
        <Image
          src="/profile.jpg" 
          alt="Lisandra"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      {/* Texto */}
      <div className="text-center md:text-left max-w-md">
        <h2
          className="text-3xl font-serif mb-4"
          style={{ letterSpacing: "1px" }}
        >
          👋 Olá, eu sou Lisandra
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Sou uma desenvolvedora apaixonada por criar experiências digitais elegantes
          e interativas. Adoro transformar ideias em realidade com código e design.
        </p>
        <button
          onClick={handleKnowMore}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full shadow-lg transition duration-300"
        >
          Quer me conhecer melhor?
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
