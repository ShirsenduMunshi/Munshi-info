"use client";
import React from "react";
import Typed from "typed.js";

function Animation() {
  // Reference to store the DOM element for the Typed.js animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Web Development",
        "JavaScript",
        "Python",
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "Database",
        "Cloud Computing",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true, // Makes the animation loop infinitely
    });

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex h-full py-6 mb-6">
      <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
        Explore{" "}
        <span
          ref={el}
          className="text-purple-500 font-bold border-b-2 border-purple-400"
        />
      </h2>
    </div>
  );
}

export default Animation;