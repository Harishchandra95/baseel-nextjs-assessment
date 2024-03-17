"use client";
import Link from "next/link";
import styled from "styled-components";
const NavbarContainer = styled.nav`
  background-color: #121212;
  color: white;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  gap: 10px;
  align-items: center;
  text-decoration: none;
  max-width: 100%;
  margin: 0;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/about">About</StyledLink>
    </NavbarContainer>
  );
}