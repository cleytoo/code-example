import styled, { css } from "styled-components";

import { ButtonProps } from "./index";

const variants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.default};
  `,
  neutral: css`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  `,
  confirm: css`
    background-color: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  `,
};

export const Wrapper = styled("button")<Omit<ButtonProps, "children">>`
  ${({ variant, small, isLoading, theme }) => css`
    height: ${small ? "3rem" : "4rem"};
    border: none;
    border-radius: 0.4rem;
    padding: 0 1rem;
    transition: all 0.1s linear;

    ${variants[variant || "primary"]};

    span {
      font-size: 1.2rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
      box-shadow: none;
      background-color: #a59797;
      color: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

      :hover {
      }
    }

    :hover {
      opacity: 0.8;
      /* transform: translateY(-1px); */
    }

    ${isLoading &&
    css`
      pointer-events: none;
      /* opacity: 0.5; */
      :hover {
        cursor: progress;
      }
    `}
  `}
`;
