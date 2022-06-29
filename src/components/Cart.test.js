import React from "react";
import { screen, render, } from "@testing-library/react";
import Cart from "./Cart";
import userEvent from "@testing-library/user-event";

describe("Cart component", () => {
    it("loads cart icon", () => {
        render(<Cart />)
        expect(screen.getByAltText("Shopping Cart")).toBeInTheDocument()
    })
    it("Opens cart menu when icon is clicked", () => {
        render(<Cart />)
        const cartIcon = screen.getByRole('img', {alt:"Shopping cart"});
        userEvent.click(cartIcon)
        expect(screen.getByRole('button', {name:"Checkout"})).toBeInTheDocument();
    })

})