import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import { Intro, Video } from "../components/Demo";

function HomePage() {
    return (
        <>
            <NavBar />
            <div className="flex flex-col gap-20 pb-20">
                <Demo>
                    <Intro to="/share" button="Share">Share files in almost no time!</Intro>
                    <Video></Video>
                </Demo>
                <Demo>
                    <Video></Video>
                    <Intro to="/shorten" button="Shorten">Make your links easy to memorize!</Intro>
                </Demo>
            </div>7
        </>
    )
}

export default HomePage;