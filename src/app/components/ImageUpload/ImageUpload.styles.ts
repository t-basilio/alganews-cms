import styled from "styled-components";
import { Wrapper as Button } from "../Button/Button.styles";
export const Wrapper = styled.div``;

export const ImagePreview = styled.div<{ preview: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  background-position: center;
  background-size: cover;

  background-image: url(${(p) => p.preview});
`;

export const ImagePreviewWrapper = styled.div`
  background-color: #274060;
  height: 240px;

  ${Button} {
    display: none;
  }

  &:hover {
    ${ImagePreview}::after {
        content: "";
        width: 100%;
        height: 240px;
        background-color: rgba(39, 64, 96, 0.7);
      }
    

    ${Button} {
      display: block;
      position: absolute;
      padding: 16px;
      
      font-size: 18px;
      background-color: #fff;
      color: #274060;

      div {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
      }
      }
    }
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px;

  background-color: #09f;
  color: #fff;

  cursor: pointer;
`;
