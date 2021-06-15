import React, { Component } from "react";
import data from "./../data";
import { NavLink } from "react-router-dom";

export class Navigation extends Component {
    render() {
        const checkActive = (match, location) => {
            //some additional logic to verify you are in the home URI
            if (!location) return false;
            const { pathname } = location;
            return pathname === "/";
        };

        return (
            <nav>
                {data.Header.map((header, i) => (
                    <div key={i}>
                        <h1 className="header__title">{header.title}</h1>
                        <ul className="navbar">
                            <li>
                                <NavLink to="/" isActive={checkActive}>
                                    Biografi
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/aterblick">Återblick</NavLink>
                            </li>
                            <li>
                                <NavLink to="/paristiden">Paristiden</NavLink>
                            </li>
                            <li>
                                <NavLink to="/skulpturer">Skulpturer</NavLink>
                            </li>
                            <li>
                                <NavLink to="/arboretum">Arboretum</NavLink>
                            </li>
                            <li>
                                <NavLink to="/lartabstrait">
                                    L'art abstrait
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/bocker">Böcker</NavLink>
                            </li>
                        </ul>
                    </div>
                ))}
            </nav>
        );
    }
}
