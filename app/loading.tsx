import "@/styles/loading.css";
export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center pt-60 md:pt-96 ">
      <div className="loading">
        <div className="loading-wide">
          <div className="l1 color"></div>
          <div className="l2 color"></div>
          <div className="e1 color animation-effect-light"></div>
          <div className="e2 color animation-effect-light-d"></div>
          <div className="e3 animation-effect-rot">X</div>
          <div className="e4 color animation-effect-light"></div>
          <div className="e5 color animation-effect-light-d"></div>
          <div className="e6 animation-effect-scale">*</div>
          <div className="e7 color"></div>
          <div className="e8 color"></div>
        </div>
      </div>
    </div>
  );
}
