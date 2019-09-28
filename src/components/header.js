import React from "react";
import styled from "react-emotion";

import { unit } from "../styles";

const siteTitle = "Bartender";

export default function Header(props) {
    return (
        <Container>
            <div>
                <h2>{siteTitle}</h2>
            </div>
        </Container>
    );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled("div")({
    display: "flex",
    alignItems: "center",
    marginBottom: unit * 3.5,
    marginLeft: unit * 2,
    marginTop: unit * 2
});
