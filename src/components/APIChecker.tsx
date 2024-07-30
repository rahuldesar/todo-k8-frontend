"use client";

import { useEffect, useState } from "react";

export default function APIChecker() {
  let [isBackendConnected, setIsBackendConnected] = useState(false);

  useEffect(() => {
    async function checkBackend() {
      const url = "http://localhost:3001";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        setIsBackendConnected(true);
        console.log("got it");
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setIsBackendConnected(false);
        }
      }
    }
    checkBackend();
  }, []);
  if (!isBackendConnected) {
    return <div>Disconnected</div>;
  }

  return <div>Connected</div>;
}
