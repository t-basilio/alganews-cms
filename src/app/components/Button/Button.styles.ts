import styled from "styled-components";
import { transparentize } from "polished";

const THEME = {
  primary: {
    bg: "#09F",
    color: "#FFF",
    onHover: `
       box-shadow: 0 3px 6px rgba(0,0,0,.2);  
    `,

    disabled: {
      color: "#FFF",
      bg: transparentize(0.44, "#09F"),
    },
  },

  danger: {
    bg: "#F84735",
    color: "#FFF",
    onHover: `
       box-shadow: 0 3px 6px rgba(0,0,0,.2);  
    `,

    disabled: {
      color: "#F84735",
      bg: transparentize(0.75, "#F84735"),
    },
  },

  text: {
    bg: "transparent",
    color: "#274060",
    onHover: `
       border-color: #274060;  
    `,

    disabled: {
      color: "#222",
      bg: transparentize(0.44, "#508AC9"),
    },
  },
};

export const Wrapper = styled.button<{
  option: "danger" | "text" | "primary";
}>`
  padding: 6px 8px 4px;
  border: 1px solid ${(p) => THEME[p.option].bg};

  color: ${(p) => THEME[p.option].color};
  background-color: ${(p) => THEME[p.option].bg};

  &:hover,
  &:focus {
    ${(p) => THEME[p.option].onHover};
  }

  &:disabled {
    background-color: ${(p) => THEME[p.option].disabled.bg};
    color: ${(p) => THEME[p.option].disabled.color};

    pointer-events: none;
    border-color: transparent;
  }
`;
