import React from "react";
import "../App.css";

function Home() {
  return (
    <main className="home-page" style={{ padding: 24 }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is a scaffolded React + TypeScript page component.</p>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a>
      </nav>
    </main>
  );
}

export default Home;
