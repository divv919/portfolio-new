import Link from "next/link";
import { ButtonInfo } from "../lib/constants";
import Button from "./Button";

export function TopButton() {
  return (
    <div className="absolute  flex mx-5 gap-2 top-0 right-0 -translate-y-full">
      {ButtonInfo.map((btn, index) => {
        return (
          <Link key={index} target="_blank" href={btn.link}>
            <Button name={btn.name} />
          </Link>
        );
      })}
    </div>
  );
}
