import React from "react";

export default function Moon() {
  return (
    <div className="absolute top-25 left-25 z-20 opacity-80">
      <div
        className="w-20 h-20 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #fffde1 100%, #fddf72 100%)",
          boxShadow: "0 0 25px rgba(255, 240, 180, 0.9)",
        }}
      ></div>
    </div>
  );
}
