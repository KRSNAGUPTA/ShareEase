/* eslint-disable react/prop-types, no-unused-vars */
import { Link } from "react-router-dom";

function Demo({ children }) {
  return (
    <div className="flex flex-col sm:flex-row items-center px-4 sm:px-40 gap-8 sm:gap-16">
      {children}
    </div>
  );
}

export function Intro({ children, to, button }) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-6 text-center">
      <p className="text-4xl sm:text-6xl leading-tight">{children}</p>
      <Link to={to}>
        <button className="bg-[var(--light)] text-2xl sm:text-3xl text-background rounded-xl px-6 sm:px-8 py-2">
          {button} Now
        </button>
      </Link>
    </div>
  );
}

export function Video({url}) {
  return (
    <div className="mt-6 flex-1 border min-h-[300px]  sm:h-[50vh] border-white bg-primary shadow-custom rounded-xl">
      <iframe
        width="100%"
        height="100%"
        className="rounded-xl"
        src={url}
        allow="accelerometer;muted; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
}

export default Demo;
