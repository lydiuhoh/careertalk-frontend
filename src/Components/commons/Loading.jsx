import React from 'react';
import styled, { keyframes } from 'styled-components';

import { onLoading } from './styles';

const LOADING = keyframes`
  0% {
    transform: scale(0.7);
    background: #0d1d2d;
  }
  50% {
    transform: scale(1);
    background: white;
  }
  100% {
    transform: scale(0.7);
    background: #0d1d2d;
  }
`;

const LOADINGREV = keyframes`
  0% {
    transform: scale(0.7);
    background: white;
  }
  50% {
    transform: scale(1);
    background: #0d1d2d;
  }
  100% {
    transform: scale(0.7);
    background: white;
  }
`;

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 0;
  &.reversed {
    li {
      border: 3px solid white;
      animation: ${LOADINGREV} 2s infinite;
      &:nth-child(1n) {
        animation-delay: 0s;
      }
      &:nth-child(2n) {
        animation-delay: 0.2s;
      }
      &:nth-child(3n) {
        animation-delay: 0.4s;
      }
    }
  }
  li {
    height: 0;
    position: absolute;
    left: 0;
    margin: 0;
    height: 13px;
    width: 13px;
    border: 1.7px solid ${props => props.theme.primaryColor};
    border-radius: 100%;
    transform: transformZ(0);
    animation: ${LOADING} 2s infinite;
    &:nth-child(1n) {
      left: -20px;
      animation-delay: 0s;
    }
    &:nth-child(2n) {
      left: 0;
      animation-delay: 0.2s;
    }
    &:nth-child(3n) {
      left: 20px;
      animation-delay: 0.4s;
    }
  }
`;

const Loading = () => (
  <Container>
    <li />
    <li />
    <li />
  </Container>
);

const SPIN = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinnerContainer = styled.img`
  height: 22px;
  animation: ${SPIN} 1.2s steps(12) infinite;
`;

const LoadingSpinner = () => (
  <LoadingSpinnerContainer src={require('../../images/loading.png')} alt="loading" />
);

const LoadingLogoContainer = styled.img`
  height: 55px;
  animation: ${onLoading} 1.1s linear infinite;
`;

const LoadingLogo = () => (
  <LoadingLogoContainer src={require('../../images/logo_transparent.png')} alt="loading" />
);

export { Loading, LoadingSpinner, LoadingLogo };
