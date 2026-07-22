"use client";

import { useEffect, useState } from "react";

export default function Greeting({ name }) {
  const [text, setText] = useState("Welcome");

  useEffect(() => {
    const hour = new Date().getHours();
    const part = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setText(part);
  }, []);

  return (
    <>
      {text}
      {name ? `, ${name}` : ""}
    </>
  );
}
