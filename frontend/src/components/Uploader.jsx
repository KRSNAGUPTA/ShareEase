import LinkProvider from "./LinkProvider";

export default function Uploader() {
    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <div className="px-10 flex flex-col gap-4 items-center">
                <div className="h-[300px] w-[500px] border-[3px] border-dashed border-white-500 flex flex-col gap-2 items-center justify-center">
                    <p>Upload your file here</p>
                    <button className="py-1 px-3 bg-[#7a7aff60] rounded">Browse File</button>
                </div>
                <button className="py-2 px-6 bg-[var(--light)] text-background rounded">Upload File</button>
            </div>

            <LinkProvider link="your link" />
        </div>
    );
};