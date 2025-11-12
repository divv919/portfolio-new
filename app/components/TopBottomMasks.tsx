export default function TopBottomMasks() {
  return (
    <>
      {" "}
      <div className="fixed top-0 left-0 w-full h-40 z-50 pointer-events-none overflow-hidden">
        {/* Base opacity gradient - smooth flow */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(23,23,23,0.75) 0%, rgba(38,38,38,0.2) 30%, rgba(64,64,64,0.06) 60%, transparent 100%)",
          }}
        ></div>
        {/* Blur layers with smooth mask transitions for flowing blur effect */}
        <div
          className="absolute inset-0 backdrop-blur-[1px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 8%, transparent 25%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 8%, transparent 25%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 backdrop-blur-[0.75px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 20%, transparent 45%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 20%, transparent 45%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 backdrop-blur-[0.5px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, transparent 20%, black 35%, transparent 65%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, transparent 20%, black 35%, transparent 65%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 backdrop-blur-[0.25px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, transparent 35%, black 50%, transparent 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, transparent 35%, black 50%, transparent 80%, transparent 100%)",
          }}
        ></div>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-40 z-50 pointer-events-none overflow-hidden">
        {/* Base opacity gradient - smooth flow */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(23,23,23,0.75) 0%, rgba(38,38,38,0.2) 30%, rgba(64,64,64,0.06) 60%, transparent 100%)",
          }}
        ></div>
        {/* Blur layers with smooth mask transitions for flowing blur effect */}
        <div
          className="absolute inset-0 backdrop-blur-[1px]"
          style={{
            maskImage:
              "linear-gradient(to top, black 0%, black 8%, transparent 25%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, black 8%, transparent 25%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 backdrop-blur-[0.75px]"
          style={{
            maskImage:
              "linear-gradient(to top, transparent 0%, black 8%, black 20%, transparent 45%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, black 8%, black 20%, transparent 45%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 backdrop-blur-[0.5px]"
          style={{
            maskImage:
              "linear-gradient(to top, transparent 0%, transparent 20%, black 35%, transparent 65%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, transparent 20%, black 35%, transparent 65%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 backdrop-blur-[0.25px]"
          style={{
            maskImage:
              "linear-gradient(to top, transparent 0%, transparent 35%, black 50%, transparent 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, transparent 35%, black 50%, transparent 80%, transparent 100%)",
          }}
        ></div>
      </div>
    </>
  );
}
