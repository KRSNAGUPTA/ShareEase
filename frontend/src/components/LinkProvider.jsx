import copyIcon from "../assets/copy.svg"

export default function LinkProvider({ link }) {
    return (
        <div className="p-0 inline-flex items-center justify-center border shadow-lg">
            <div className="py-4 px-8 ">
                {link}
            </div>

            <button className="py-2 px-3 border-l">
                <img src={copyIcon} alt="copy" width="30px" />
            </button>
        </div>
    );
};