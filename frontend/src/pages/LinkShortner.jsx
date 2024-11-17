import NavBar from "@/components/NavBar";
import api from "@/util/api";
import { Copy } from "lucide-react";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LinkShortenerCard() {
  const [originalLink, setOriginalLink] = useState("");
  const [slug, setSlug] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);
  const [shortenedUrl, setShortenedUrl] = useState("");

  const checkAvailability = async () => {
    try {
      const res = await api.get(`/checkslug/${slug}`);
      console.log("res", res);

      if (res.status === 200) {
        setIsAvailable(true);
        toast.success(`${res.data.message}`);
      }
    } catch (error) {
      if (error.response.status === 409) {
        toast.error(`${slug} is already taken. Please choose another slug.}`);
      }
    }
  };

  const shortenLink = async () => {
    if (!isAvailable) {
      toast.error("Slug is not available. Please choose another slug.");
      return;
    }
    if (!originalLink.trim()) {
      toast.error("Please enter a valid link.");
      return;
    }
    const res = await api.post("/link", {
      link: originalLink,
      slug,
      isLink: true,
    });
    if (res.status === 200) {
      setShortenedUrl(res.data.slug);
      toast.success("Link shortened successfully.");
    } else {
      toast.error("An error occurred while shortening the link.");
    }
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(
      `${import.meta.env.VITE_FRONTEND_URL}/${shortenedUrl}`
    );
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="h-screen flex flex-col items-center bg-background">
      <NavBar />
      <div className="flex items-center justify-center w-full flex-1 p-4">
        <div className="w-full max-w-lg mx-auto p-6 pt-8 bg-background rounded-2xl shadow-md border">
          <h2 className="text-2xl font-bold text-center text-primary mb-8">
            Shorten Your Link
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="originalLink"
                className="block text-sm mb-2 font-medium text-foreground"
              >
                Original Link
              </label>
              <input
                type="url"
                id="originalLink"
                value={originalLink}
                onChange={(e) => setOriginalLink(e.target.value)}
                placeholder="Enter your original link"
                className="mt-1 w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="slug"
                className="block text-sm font-medium text-foreground"
              >
                Customize your link!
              </label>
              <div className="mt-1 flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  {import.meta.env.VITE_FRONTEND_URL}/
                </span>
                <input
                  type="text"
                  id="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="Enter your suffix"
                  className="border-b-2 flex-1 px-4 py-2 rounded-xl text-sm focus:outline-none"
                />
                <button
                  onClick={checkAvailability}
                  disabled={!slug.trim()}
                  className="w-full sm:w-auto px-4 py-2 text-sm font-semibold text-primary rounded-full active:scale-90 hover:bg-secondary disabled:bg-muted transition"
                >
                  Check
                </button>
              </div>
            </div>

            {/* Shorten Link Button */}
            <button
              onClick={shortenLink}
              disabled={!originalLink.trim() || !isAvailable}
              className="w-full sm:w-auto px-4 py-2 text-sm font-semibold bg-[var(--light)] text-background rounded-full hover:bg-secondary active:scale-90 disabled:bg-muted transition"
            >
              Shorten Link
            </button>

            {/* Shortened Link Display */}
            {shortenedUrl ? (
              <div className="mt-4 p-4 bg-muted rounded-md text-center">
                <p className="text-sm text-foreground">Your shortened link:</p>
                <div className="space-x-4 flex flex-row justify-center items-center">
                  <a
                    href={shortenedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline break-words max-w-xs sm:max-w-full"
                  >
                    {import.meta.env.VITE_FRONTEND_URL}/{shortenedUrl}
                  </a>
                  <Copy
                    onClick={copyToClipBoard}
                    className="text-sm cursor-pointer"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        // theme="dark"
        autoClose={2000}
        hideProgressBar={false}
        className={`text-white`}
      />
    </div>
  );
}

export default LinkShortenerCard;
