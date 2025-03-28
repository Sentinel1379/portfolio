export default function Loading() {
  return (
    <>
      <div className="flex-center bg-[rgba(0,0,0,.5)] fixed top-0 right-0 bottom-0 left-0 z-1000 w-full h-full">
        <div className="flex flex-row gap-2">
          <div
            style={{
              backgroundImage:
                "conic-gradient(from 0deg, violet, indigo 30%, blue 50%, green 60%, yellow 70%, orange 80%, red 100%)",
            }}
            className="w-60 h-60 rounded-full bg-radial bg-gradient-to-tr animate-spin [animation-delay:.7s]"
          ></div>
        </div>
      </div>
    </>
  );
}
