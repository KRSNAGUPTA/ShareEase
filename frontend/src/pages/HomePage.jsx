import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import { Intro, Video } from "../components/Demo";

function HomePage() {
  return (
    <>
      <div className="w-full h-screen">
        <NavBar />
        <div className="flex flex-col gap-20 pb-20">
          <Demo className="flex sm:flex-wrap">
            <Intro to="/share" button="Share">
              Share files in almost no time!
            </Intro>
            <Video url = {"https://www.youtube.com/embed/dQw4w9WgXcQ"}/>
          </Demo>
          <Demo className="flex sm:flex-wrap">
            <Video url = {"https://www.youtube.com/embed/dQw4w9WgXcQ"}/>
            <Intro to="/shorten" button="Shorten">
              Make your links easy to memorize!
            </Intro>
          </Demo>
        </div>
      </div>
    </>
  );
}

export default HomePage;
