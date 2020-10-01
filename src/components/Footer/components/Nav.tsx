import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <>
      <StyledNav>
        <StyledLink
          target="_blank"
          href="https://etherscan.io/address/0x7f7710e0c7c5c0ff043963dd22c3988e8bdb7acc"
        >
          TacosChef Contract
        </StyledLink>
        <StyledLink
          target="_blank"
          href="https://app.uniswap.org/#/add/0x41c028a4c1f461ebfc3af91619b240004ebad216/ETH"
        >
          Uniswap TACO-ETH
        </StyledLink>
        <StyledLink target="_blank" href="https://github.com/TacoswapCRD">
          Github
        </StyledLink>
        <StyledLink target="_blank" href="https://twitter.com/tacoswap">
          Twitter
        </StyledLink>
      </StyledNav>
      <StyledNav>
        <StyledLink
          target="_blank"
          href="https://www.crdtoken.org"
        >
          Powered by CRD Token 
        </StyledLink>
      </StyledNav>
    </>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
