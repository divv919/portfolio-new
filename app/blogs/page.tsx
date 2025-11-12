import Image from "next/image";
import ArrowOnHover from "../components/ArrowOnHover";

export default function Blogs() {
  return (
    <div className="flex flex-col text-md gap-9 w-full tracking-tight ">
      <div className="w-full h-75 relative">
        <Image alt="bg" fill src="/aesthetic.jpg" />
      </div>{" "}
      <div className="flex flex-col gap-2">
        <div className="text-neutral-300 ">
          This section will be updated when i start writing blogs :)
        </div>
        <div className="text-neutral-400 flex gap-2">
          Till then follow me on{" "}
          <ArrowOnHover href="https://x.com/divv919">
            <span className="border-b border-neutral-600 border-dotted">
              x.com
            </span>
          </ArrowOnHover>
        </div>
      </div>
    </div>
  );
}
