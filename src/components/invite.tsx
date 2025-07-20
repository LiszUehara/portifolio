import React, { useState } from "react";
import { useRouter } from "next/router";

const Invite: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-pink-300"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?fit=crop&w=1500&q=80)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      {!opened ? (
        <>
          <h1 className="text-5xl font-cursive mb-8">💌 Você foi convidado</h1>
          <button
            onClick={() => setOpened(true)}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-xl transition duration-300"
          >
            Abrir
          </button>
        </>
      ) : (
        <>
          <h2 className="text-4xl mb-4 font-cursive">🎀 Quer jogar comigo?</h2>
          <button
            onClick={() => router.push("/play")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-xl transition duration-300"
          >
            ▶️ Play
          </button>
        </>
      )}
    </div>
  );
};

export default Invite;
