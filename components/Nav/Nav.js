import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

import github from "/public/github-mark-white.svg";

export default function Nav() {
    return (
        <StyledNav>
            <Link href="/">Spotlight</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/favorites">Favorites</Link>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    display: flex;
    justify-content: end;
    align-items: center;
    padding-block: 1rem;
    gap: 2rem;
    border-bottom: 1px solid black;
    opacity: 0.7;

    a {
        text-decoration: none;
        color: black;
        font-weight: lighter;
    }
`;
