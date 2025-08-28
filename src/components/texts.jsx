import React from 'react';
import styled from 'styled-components';

export const TextShine = ({text}) => {
  return (
    <StyledWrapper>
      <h1 className="btn-shine">{text}</h1>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn-shine {
    color: #fff;
    background: linear-gradient(to right, #5579ef 0, #ff2b2bc8 10%, #467df3 20%);
    background-position: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s infinite linear;
    animation-fill-mode: forwards;
    -webkit-text-size-adjust: none;
    text-decoration: none;
    white-space: nowrap;
  }
  @-moz-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
  @-webkit-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
  @-o-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 110px;
    }
    100% {
      background-position: 180px;
    }
  }`;


