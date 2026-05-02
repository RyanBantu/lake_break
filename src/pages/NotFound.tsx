import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="font-display text-6xl md:text-7xl text-foreground tracking-tight">404</h1>
        <p className="mt-4 text-lg text-muted-foreground font-body">This page floated away with the tide.</p>
        <a
          href="/"
          className="mt-8 inline-block font-body text-sm font-semibold text-primary hover:text-primary/80 underline-offset-4 hover:underline"
        >
          Back to the shore
        </a>
      </div>
    </div>
  );
};

export default NotFound;
