import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  display: flex;
  width: 100%;
  gap: 24px;
  padding: 16px;
  align-items: center;

  text-decoration: none;
  color: #274060;
  border: 1px solid #ccc;
  transition: box-shadow 0.15s ease;
  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0 0 0 5px #09f;
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.h3`
  font-size: 18px;
`;

export const Description = styled.div`
  font-size: 12px;
`;
