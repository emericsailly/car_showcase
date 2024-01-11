import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" | "reset";
}

export interface SearchManufProps {
    manuf: string;
    setManuf: (manuf: string) => void;
}
