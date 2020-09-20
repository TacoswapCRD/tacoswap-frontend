import React from 'react'
import styled, { keyframes } from 'styled-components'
import taco from '../../assets/img/taco.png'

import CardIcon from '../CardIcon'

interface LoaderProps {
  text?: string
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <StyledLoader>
      <CardIcon>
        <StyledTaco>
          <img src={taco} alt="TACO" />
        </StyledTaco>
      </CardIcon>
      {!!text && <StyledText>{text}</StyledText>}
    </StyledLoader>
  )
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const StyledLoader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledTaco = styled.div`
  font-size: 32px;
  position: relative;
  animation: 1s ${spin} infinite;

  img {
    height: 32px;
    width: 32px;
  }
`

const StyledText = styled.div`
  color: ${(props) => props.theme.color.grey[400]};
`

export default Loader
