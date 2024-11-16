import NavBar from "@/components/NavBar";
import React, { useEffect, useState } from "react";
import api from "@/util/api";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

function RedirectPage() {
  const [originalLink, setOriginalLink] = useState("");
  const { slug } = useParams();
  useEffect(() => {
    const getLink = async () => {
      const res = await api.get(`/getlink/${slug}`);
      const link = res.data.data.originalLink;
      setOriginalLink(link);
        window.location.href = link;
    };
    setTimeout(() => {
      getLink();
    }, 1000);
  }, []);

  return (
    <div className="h-screen flex items-center flex-col">
      <NavBar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md mx-auto p-6 pt-8 bg-background flex flex-col items-center sace-y-8 rounded-2xl ">
          <div className="flex flex-row justify-between">
            <h2 className="text-3xl font-bold text-center text-primary mb-1">
              Redirecting...
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" text-center text-foreground mb-4">
              Please wait while we redirect you
            </p>
          </div>
          <p className="text-sm text-center text-muted-foreground">
            If you're not redirected within a few seconds, click here:
          </p>
          <a
            href={originalLink}
            rel="noopener noreferrer"
            aria-label="rediect button"
          >
            <button className="bg-white text-primary font-bold px-6 py-2 rounded-full m-4  hover:shadow-inner active:scale-95 transition-all duration-900 ease-in-out animate-pulse hover:text-secondary hover:bg-primary ">
              Redirect
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RedirectPage;
