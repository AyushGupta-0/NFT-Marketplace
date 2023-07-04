"use client";
import "@corbado/webcomponent/pkg/auth_cui.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // This will run only on client-side
    import("@corbado/webcomponent")
      .then((module) => {
        const Corbado = module.default || module;
        setSession(new Corbado.Session(process.env.NEXT_PUBLIC_PROJECT_ID));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Refresh the session whenever it changes
    if (session) {
      // @ts-ignore
      session.refresh(() => {});
    }
  }, [session]);
  return (
    // <div className="min-h-screen w-full bg-background relative flex flex-col">
    //   <div className="h-60 w-60 absolute rounded-full animate-breath top-1/2 bg-green right-8" />
    //   <div className="absolute bg-background backdrop-blur-xl h-full z-10 w-full bg-opacity-90" />
    // </div>
    <div>
      <corbado-auth
        project-id={process.env.NEXT_PUBLIC_PROJECT_ID}
        conditional="yes"
      >
        <input
          name="username"
          id="corbado-username"
          data-input="username"
          required
          autoComplete="webauthn"
        />
      </corbado-auth>
    </div>
  );
}
