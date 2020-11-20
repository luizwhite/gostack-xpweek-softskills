/* eslint-disable implicit-arrow-linebreak */
import styled, { css } from 'styled-components';

import headerImg from '../../assets/header-3.jpg';

export const sectionFadeTimeout = 300;
const headerTransitionTime = 500;

export const Container = styled.div<{ section: number }>`
  --quote-box-width: 500px;
  --quote-box-height: calc(var(--quote-box-width) * 0.8);
  ${// prettier-ignore
  ({ section }) => (section > 1
    ? css`
        --header-height: calc(var(--quote-box-width) * 0.5);
      `
    : css`
        --header-height: var(--quote-box-width);
      `
  )}

  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// prettier-ignore
export const Header = styled.header<{ section: number }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: calc(100vw - 100%);

  height: var(--header-height);

  color: #000;
  font-size: 80px;
  font-family: 'Kaushan Script', cursive;
  font-weight: bold;

  background: #f2f2f2 url(${headerImg}) no-repeat center 50% / cover;
  transition: height ${headerTransitionTime}ms;

  > p {
    transition: margin ${headerTransitionTime}ms;
    margin-top: 1em;
    ${
  ({ section }) =>
    section === 1
      && css`
        margin-top: 2em;
      `}
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  padding-right: calc(100% - 100vw);

  min-height: var(--quote-box-height);
  height: calc(100vh - var(--header-height));
  background-color: #1d3557;

  transition: height ${headerTransitionTime}ms;
`;

export const StyledSection = styled.section<{ $show: boolean }>`
  /* flex: 1; */
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10%;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;

  transition: opacity ${sectionFadeTimeout}ms;

  &.section-1 {
    padding-right: calc(10% + var(--quote-box-width));
  }

  ${({ $show }) => css`
    opacity: ${$show ? 1 : 0};
  `}

  &.section-1 {
    > img {
      background-color: rgba(241, 250, 238, 0.3);
      padding: 20px;
      border-radius: 50%;
      width: 200px;
      height: 200px;
    }

    > p {
      padding: 0 10em;
    }
  }

  &.section-2 {
    flex-direction: column;
    justify-content: space-between;

    > p {
      height: 60%;
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      padding: 50px;
      margin-top: 50px;

      border: 3px solid #e63946;
      border-radius: 20px;
      background-color: #f1faee;

      color: #000;
      font-size: 22px;

      > div {
        height: 70px;
        width: 70px;
        position: absolute;
        bottom: 100%;
        right: 100%;
        transform: translate(50%, 50%);

        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        border-radius: 50%;
        background-color: #e63946;
      }
    }

    > div {
      width: 60%;
      display: flex;
      justify-content: space-around;
      margin: auto 0;

      > button {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 10px;
        border-radius: 5px;
        background-color: #e63946;

        color: #f1faee;
        font-weight: bolder;
      }
    }
  }

  &.section-3 {
    > div {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
      max-width: 1000px;
    }

    > div > p {
      max-width: 400px;
    }

    > div > img {
      max-width: 400px;
    }
  }

  &.section-4 {
    flex-direction: column;
    justify-content: unset;

    > h1 {
      font-weight: bold;
      font-size: 26px;
      margin-bottom: 60px;
    }

    > div {
      flex: 1;
      position: relative;
      width: 50%;
      height: 50%;
      margin-bottom: 60px;

      > img {
        max-width: 500px;
        max-height: 100%;
        position: absolute;
      }

      > p {
        width: 50%;
        min-height: 200px;
        padding: 20px;

        display: flex;
        align-items: center;

        position: absolute;
        bottom: 0;
        right: 0;

        border-radius: 20px;
        background-color: rgba(241, 250, 238, 0.4);
        color: #1d3557;
      }
    }
  }
  &.section-5 {
    flex-direction: column;
    justify-content: unset;

    > h1 {
      font-weight: bold;
      font-size: 36px;
      margin-bottom: 60px;
    }

    > ul {
      flex: 1;
      width: 70%;
      display: flex;
      justify-content: center;
      font-size: 30px;
      font-weight: 600;

      li {
        cursor: pointer;

        > span {
          position: relative;
        }
      }

      li:first-child span {
        color: #e63946;
      }

      li:first-child span::before,
      li:first-child span::after {
        background-color: #e63946;
      }

      li:not(:last-child) {
        margin-right: 20%;
      }

      li span::before {
        right: 45%;
      }

      li span::after {
        left: 45%;
      }

      li span::before,
      li span::after {
        content: '';
        display: block;
        width: 55%;
        height: 3px;
        position: absolute;
        bottom: -5px;
        background-color: #f1faee;
        opacity: 1;
        transition: all 0.4s ease-in-out;
        border-radius: 30px;
      }
    }

    > div {
      flex: 1;
      position: relative;
      width: 50%;
      display: flex;
      margin-bottom: 100px;

      > img {
        max-width: 500px;
        max-height: 100%;
        position: absolute;
        bottom: 50%;
        transform: translateY(50%);
      }

      > p {
        width: 50%;
        min-height: 100px;
        padding: 20px;

        display: flex;
        align-items: center;

        position: absolute;
        bottom: 50%;
        transform: translateY(50%);
        right: 0;

        border-radius: 20px;
        background-color: rgba(241, 250, 238, 0.4);
        color: #1d3557;
        font-size: 18px;
      }
    }
  }
`;

export const QuoteBox = styled.div`
  height: var(--quote-box-height);
  width: var(--quote-box-width);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  border: 2px solid #1d3557;
  border-radius: 40px;
  padding: 40px;

  color: #000;
  background-color: #f1faee;
  position: absolute;
  top: -100px;
  right: calc(10vw - calc(100vw - 100%));

  > p {
    font-weight: bolder;
  }
`;

// prettier-ignore
export const MyChevron = styled.div<{ section: number }>`
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 100;

  &:first-child {
    left: 0;

    ${({ section }) => section === 1
      && css`
        &:hover {
          background-color: unset;
        }
        svg {
          opacity: 0.5;
        }
      `}
  }

  &:last-child {
    right: 0;

    ${({ section }) => section === 5
      && css`
        &:hover {
          background-color: unset;
        }
        svg {
          opacity: 0.5;
        }
      `}
  }

  line-height: 0;

  cursor: pointer;
  transition: background-color 0.3s;

  &:first-child svg {
    margin-left: -2px;
  }

  &:last-child svg {
    margin-left: 2px;
  }

  &:hover {
    background-color: rgba(241, 250, 238, 0.2);
  }
`;