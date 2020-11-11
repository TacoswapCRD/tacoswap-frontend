import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import styled, {css} from 'styled-components'
import {useScrollingElement} from '../../../hooks/useScrollingElement'
import AccountButton from '../components/AccountButton'

const Nav: React.FC = () => {
  const [trigger, setTrigger] = useState(false)
  const toggleNav = () => {
    setTrigger(prev => !prev);
  };
  useScrollingElement(trigger)
  return (
    <>
      <StyledNav className={`${trigger ? 'active' : ''}`} maxHeight={trigger}>
        <StyledLink exact activeClassName="active" to="/" onClick={() => setTrigger(false)}>
          Home
        </StyledLink>
        <StyledLink exact activeClassName="active" to="/farms" onClick={() => setTrigger(false)}>
          Farm
        </StyledLink>
        <StyledLink exact activeClassName="active" to="/staking" onClick={() => setTrigger(false)}>
          Staking
        </StyledLink>
        <StyledAbsoluteLink
          href="https://pensive-lamport-93e9fa.netlify.app/"
          target="_blank"
          onClick={() => setTrigger(false)}
        >
          Exchange
        </StyledAbsoluteLink>
        <StyledAbsoluteLink
          href="https://medium.com/@tacoswaps/1b2af61d530f"
          target="_blank"
          onClick={() => setTrigger(false)}
        >
          About
        </StyledAbsoluteLink>
        <StyledAccountButtonWrapper>
          <AccountButton onClick={() => toggleNav()} />
        </StyledAccountButtonWrapper>
      </StyledNav>

      <StyledBurgerMenuWrapper trigger={trigger} onClick={() => toggleNav()}>
        <span/>
        <span/>
        <span/>
      </StyledBurgerMenuWrapper>
    </>
  )
}

const StyledBurgerMenuWrapper = styled.div<{trigger?: boolean}>`
  width: 16px;
  height: 16px;
  display: block;
  @media screen and (min-width: 927px) {
    display: none;
  }
  position: relative;
  float: right;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;

  span{
    display: block;
    position: absolute;
    height: 2px;
    width: 16px;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    }
    ${({trigger}) => trigger ?
    css`
    span:nth-child(1) {
    top: 7px;
    transform: rotate(135deg);
    }
    span:nth-child(2) {
    opacity: 0;
    }
    span:nth-child(3) {
    top: 7px;
    transform: rotate(-135deg);
    }
    ` 
    : 
    css`
    span:nth-child(1) {
    top: 0px;
    }
    span:nth-child(2) {
    top: 6px;
    }
    span:nth-child(3) {
    top: 12px;
    }
  `};
`

const StyledNav = styled.nav<{maxHeight?:boolean}>`
  display: flex;
    width: 66%;
  @media (max-width: 926px) {
    width: 100%;
    align-items: flex-start;
    position: fixed;
    top: 73px;
    left: 150%;
    right: 0;
    flex-direction: column;
    background: #f7c67c;
    bottom: 0;
    transition: all 0.5s ease;
    z-index: 100;
    opacity: 0.89;
    &.active {
      left: 0; 
    }
  }
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  @media screen and (max-width: 926px) {
    float: left;
    display: block;
    text-align: center;
    padding: 24px 47px 0;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  @media screen and (max-width: 926px) {
    float: left;
    display: block;
    text-align: center;
    padding: 24px 46px 0;
    sup {
      position: relative;
      top: 0
    }
  }
`

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 156px;
  margin-left: auto;
  @media (max-width: 926px) {
    width: 126px;
    margin: 30px auto 0;
  }
`

export default Nav
