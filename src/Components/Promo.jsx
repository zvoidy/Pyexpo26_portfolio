import React, { useEffect, useRef } from "react";
import promovid from "/vid/Pyexpo24.webm";

const Promo = () => {
  const vidRef = useRef(null);

  useEffect(() => {
    // Attempt to play programmatically to handle strict autoplay policies.
    const v = vidRef.current;
    if (v) {
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          // Autoplay may be blocked; video remains muted + has controls so user can start it.
        });
      }
    }
  }, []);

  return (
    <div className="promo">
      <video
        ref={vidRef}
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <source src={promovid} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Promo;