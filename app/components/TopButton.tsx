import { ButtonInfo } from "../lib/constants";
import Button from "./Button";

export function TopButton() {
  return (
    <div className="absolute  flex mx-5 gap-2 top-0 right-0 -translate-y-full">
      {ButtonInfo.map((btn, index) => {
        const buttonName = Object.keys(
          btn
        )[0] as keyof (typeof ButtonInfo)[number];
        return <Button key={index} name={buttonName} />;
      })}
    </div>
  );
}
