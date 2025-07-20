import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        minHeight: "100vh",
        color: "#a47124",
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}
