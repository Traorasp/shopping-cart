import React from "react";
import { screen, render } from "@testing-library/react";
import Nav from "./Nav";
import {BrowserRouter as Router} from 'react-router-dom';

describe("Nav component", () => {
    it("Renders correct heading", () => {
        const {getByRole} = render(<Router><Nav /></Router>);
        expect(getByRole('heading').textContent).toMatch(/Fantasyne/i);
    })
    it("Renders correct navigation buttons", () => {
        render(<Router><Nav /></Router>);
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    })
})