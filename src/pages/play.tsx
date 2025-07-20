import React, { useState } from "react";
import { useRouter } from "next/router";

const Play: React.FC = () => {
  const [name, setName] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();

    if (trimmedName) {
      router.push({
        pathname: "/hello",
        query: { user: trimmedName },
      });
    } else {
      alert("Por favor, insira seu nome antes de continuar.");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundColor: "#000",
        color: "#a47124",
        height: "100vh", 
      }}
    >
      <div
        className="flex flex-col items-center justify-center"
        style={{
          width: "100%",
          maxWidth: "420px",
          minHeight: "320px",
          background: "#f6f1eb",
          border: "4px solid #E7B173",
          borderRadius: "18px",
          boxShadow: "0 8px 32px rgba(231,177,115,0.15)",
          padding: "40px 32px",
          textAlign: "center",
          position: "relative",
          
        }}
      >
        <h1
          className="text-4xl font-serif mb-4"
          style={{ color: "#a47124", letterSpacing: "2px" }}
        >
          💌 Convite Especial
        </h1>
        <p className="text-lg mb-8" style={{ color: "#a47124" }}>
          Digite seu nome abaixo para abrir seu convite.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
          <input
            type="text"
            placeholder="Seu Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-full text-center mb-6 focus:outline-none focus:ring-2 focus:ring-[#E7B173] w-full"
            style={{
              backgroundColor: "#f6f1eb",
              fontSize: "1.1rem",
              fontWeight: "500",
              border: "2px solid #E7B173",
              color: "#a47124",
              width: "100%",
              maxWidth: "280px",
            }}
          />
          <style>{`
            ::placeholder {
              color: #E7B173;
              opacity: 1;
            }
          `}</style>
          <button
            type="submit"
            className="font-bold py-2 px-8 rounded-full transition duration-300 ease-in-out shadow-lg w-full"
            style={{
              backgroundColor: "#E7B173",
              color: "#a47124",
              border: "none",
              maxWidth: "180px",
            }}
          >
            Abrir Convite
          </button>
        </form>
      </div>
    </div>
  );
};

export default Play;
