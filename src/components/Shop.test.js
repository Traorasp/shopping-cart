import React from "react";
import { screen, render } from "@testing-library/react";
import Shop from "./Shop";
import userEvent from "@testing-library/user-event";

describe("Shop Component", () => {
    it("Loads nav bar correctly", () =>{
        render(<Shop />)
        expect(screen.getByRole("navigation")).toBeInTheDocument();
        expect(screen.getAllByRole("button")[0].textContent).toBe("All");
        expect(screen.getAllByRole("button")[1].textContent).toBe("Minerals");
        expect(screen.getAllByRole("button")[2].textContent).toBe("Monster Parts");
    })
    it("Nav button change to corresponding display", () => {
        render(<Shop />)
        const allButton = screen.getByRole("button", {name:"All"});
        const mineralButton = screen.getByRole("button", {name:"Minerals"});
        const partButton = screen.getByRole("button", {name:"Monster Parts"});
        
        userEvent.click(allButton);
        expect(screen.getByRole("heading", {name:"All"})).toBeInTheDocument();
        userEvent.click(mineralButton);
        expect(screen.getByRole("heading", {name:"Minerals"})).toBeInTheDocument();
        userEvent.click(partButton);
        expect(screen.getByRole("heading", {name:"Monster Parts"})).toBeInTheDocument();
    })
})