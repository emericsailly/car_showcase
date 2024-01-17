import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" | "reset";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchBarProps {
    setManuf: (manuf: string) => void;
    setModel: (model: string) => void;
}

export interface SearchManufProps {
    selected: string;
    setSelected: (selected: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
    color: string;
}

export interface FilterProps {
    manuf: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    options: OptionProps[];
    setFilter: (filter: any) => void;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}
