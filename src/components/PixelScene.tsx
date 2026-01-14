interface PixelSceneProps {
  scrollProgress: number;
}

export function PixelScene({ scrollProgress }: PixelSceneProps) {
  // Calculate building positions based on scroll progress
  // Buildings appear at different scroll positions
  const buildingPositions = [
    { type: "school", progress: 20 },
    { type: "job", progress: 40 },
    { type: "volunteer", progress: 60 },
    { type: "rowing", progress: 80 },
  ];

  return (
    <div className="w-full h-full relative bg-gradient-to-b from-cyan-300 to-blue-400 overflow-hidden">
      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-300 to-cyan-200" />

      {/* Ground */}
      <div className="absolute bottom-0 w-full h-1/4 bg-green-700" />

      {/* Sun */}
      <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-300 border-2 border-yellow-500 rounded-full" />

      {/* Buildings on the path */}
      <div className="absolute inset-0 pointer-events-none">
        {buildingPositions.map((building) => {
          const isVisible = scrollProgress >= building.progress - 15;
          const opacity = Math.min(
            1,
            Math.max(0, (scrollProgress - (building.progress - 15)) / 10)
          );

          return (
            <div
              key={building.type}
              className="absolute"
              style={{
                left:
                  building.type === "school"
                    ? "10%"
                    : building.type === "job"
                    ? "75%"
                    : building.type === "volunteer"
                    ? "15%"
                    : "70%",
                top: `${building.progress + 10}%`,
                opacity: isVisible ? opacity : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              {building.type === "school" && <SchoolBuilding />}
              {building.type === "job" && <JobBuilding />}
              {building.type === "volunteer" && <VolunteerBuilding />}
              {building.type === "rowing" && <RowingBuilding />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SchoolBuilding() {
  return (
    <div className="relative w-20 h-24 bg-red-600 border-4 border-red-900">
      {/* Roof */}
      <div
        className="absolute -top-3 left-0"
        style={{
          borderLeft: "40px solid transparent",
          borderRight: "40px solid transparent",
          borderBottom: "16px solid #7f1d1d",
          width: 0,
          height: 0,
        }}
      />

      {/* Windows */}
      {[0, 1].map((row) =>
        [0, 1].map((col) => (
          <div
            key={`${row}-${col}`}
            className="absolute w-3 h-3 bg-yellow-300 border border-yellow-600"
            style={{
              left: `${6 + col * 10}px`,
              top: `${6 + row * 10}px`,
            }}
          />
        ))
      )}

      {/* Door */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-orange-900 border border-orange-600" />

      {/* Flag */}
      <div className="absolute -top-6 right-2 w-0.5 h-6 bg-gray-600">
        <div className="absolute top-0 left-0.5 w-3 h-2 bg-blue-600 border border-blue-900" />
      </div>
    </div>
  );
}

function JobBuilding() {
  return (
    <div className="relative w-24 h-28 bg-gray-500 border-4 border-gray-700">
      {/* Windows */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <div
            key={`${row}-${col}`}
            className="absolute w-3 h-3 bg-cyan-300 border border-cyan-600"
            style={{
              left: `${5 + col * 9}px`,
              top: `${6 + row * 9}px`,
            }}
          />
        ))
      )}

      {/* Door */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-10 bg-yellow-700 border-2 border-yellow-900" />

      {/* Antenna */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-800" />
    </div>
  );
}

function VolunteerBuilding() {
  return (
    <div className="relative flex gap-4">
      {/* Two tents for volunteer center */}
      <div
        className="w-0 h-0"
        style={{
          borderLeft: "24px solid transparent",
          borderRight: "24px solid transparent",
          borderBottom: "40px solid #16a34a",
        }}
      />
      <div
        className="w-0 h-0"
        style={{
          borderLeft: "24px solid transparent",
          borderRight: "24px solid transparent",
          borderBottom: "40px solid #9333ea",
        }}
      />
    </div>
  );
}

function RowingBuilding() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Water waves */}
      <div className="flex items-end gap-1 h-12">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex-1 bg-blue-600 border border-blue-900 animate-pulse"
            style={{
              height: `${12 + (i % 2) * 6}px`,
            }}
          />
        ))}
      </div>

      {/* Boat */}
      <div className="relative w-16 h-5 bg-yellow-600 border-2 border-yellow-800 rounded-full">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-6 bg-orange-700 border border-orange-900" />
      </div>
    </div>
  );
}
