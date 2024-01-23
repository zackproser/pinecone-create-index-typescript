"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Call the API that will set up the Pinecone index and return its creation status
    fetch("/api/init-pinecone")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <p>
        This app demonstrates Pinecone client initialization and index creation
      </p>
    </main>
  );
}
