export default function BackgroundEffects() {
  return (
    <>
      {/* Top Left Glow */}
      <div className="fixed -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px] pointer-events-none -z-10 animate-float" />

      {/* Top Right Glow */}
      <div className="fixed top-20 right-0 w-[450px] h-[450px] rounded-full bg-blue-500/15 blur-[140px] pointer-events-none -z-10 animate-float" />

      {/* Bottom Glow */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none -z-10" />
    </>
  );
}