import React from "react";
import NavBar from "@/components/NavBar";

function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center">
      <NavBar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md mx-auto p-6 pt-8 bg-background flex flex-col items-center space-y-8 rounded-2xl shadow-lg">
          <div className="flex flex-row justify-between">
            <h1 className="text-5xl font-bold text-center text-primary animate-bounce">
              404
            </h1>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="text-lg font-semibold text-foreground mb-4">
              Oops! Page not found.
            </p>
            <p className="text-sm text-muted-foreground">
              The page you’re looking for doesn’t exist or has been moved.
            </p>
          </div>
          <a
            href="/"
            rel="noopener noreferrer"
            aria-label="home button"
            className="bg-white text-dark font-bold px-6 py-2 rounded-full m-4 hover:shadow-inner active:scale-95 transition-all duration-900 ease-in-out animate-pulse hover:text-secondary hover:bg-primary"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
