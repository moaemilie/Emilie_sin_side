interface PixelCharacterProps {
  scrollProgress: number;
}

export function PixelCharacter({ scrollProgress }: PixelCharacterProps) {
  // Calculate character Y position (0-100% scroll = 0-80% down the screen)
  const characterY = (scrollProgress / 100) * 80;

  // Walking animation frame (cycle through 4 frames based on scroll)
  const walkFrame = Math.floor((scrollProgress / 100) * 4) % 4;

  return (
    <div
      className="absolute transition-transform duration-300"
      style={{
        transform: `translateY(${characterY}vh)`,
        left: "10%",
      }}
    >
      {/* Simple pixel art character using CSS */}
      <div className="relative w-12 h-16">
        {/* Head */}
        <div className="absolute top-0 left-4 w-4 h-4 bg-yellow-200 border-2 border-yellow-900" />

        {/* Body */}
        <div className="absolute top-4 left-3 w-6 h-6 bg-blue-500 border-2 border-blue-900" />

        {/* Left Leg */}
        <div
          className="absolute top-10 left-2 w-2 h-4 bg-red-900 transition-transform duration-100"
          style={{
            transform: `rotateZ(${walkFrame % 2 === 0 ? -15 : 15}deg)`,
            transformOrigin: "top center",
          }}
        />

        {/* Right Leg */}
        <div
          className="absolute top-10 left-5 w-2 h-4 bg-red-900 transition-transform duration-100"
          style={{
            transform: `rotateZ(${walkFrame % 2 === 0 ? 15 : -15}deg)`,
            transformOrigin: "top center",
          }}
        />

        {/* Left Arm */}
        <div
          className="absolute top-5 left-0 w-2 h-4 bg-yellow-200 transition-transform duration-100"
          style={{
            transform: `rotateZ(${walkFrame % 2 === 0 ? -20 : 20}deg)`,
            transformOrigin: "top center",
          }}
        />

        {/* Right Arm */}
        <div
          className="absolute top-5 right-0 w-2 h-4 bg-yellow-200 transition-transform duration-100"
          style={{
            transform: `rotateZ(${walkFrame % 2 === 0 ? 20 : -20}deg)`,
            transformOrigin: "top center",
          }}
        />
      </div>
    </div>
  );
}
