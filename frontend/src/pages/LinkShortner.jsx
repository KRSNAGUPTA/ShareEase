import LinkProvider from "@/components/LinkProvider";
import NavBar from "../components/NavBar";

function LinkShortner() {
    return (
        <>
            <NavBar />
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex gap-4 justify-center w-[60%]">
                    <input type="text" name="long-link" id="long-link" className="px-4 py-2 border border-white focus:outline-none w-[100%] rounded" />

                    <button className="py-2 px-4 bg-light rounded">
                        Shorten
                    </button>
                </div>

                <LinkProvider link="your short link here" />
            </div>
        </>
    )
}

export default LinkShortner;