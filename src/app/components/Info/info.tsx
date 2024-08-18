import { mdiInformation } from "@mdi/js";
import Icon from "@mdi/react";
import { transparentize } from "polished";
import styled from "styled-components";

export interface InfoProps {
  title: string;
  description: string;
}

export default function Info(props: InfoProps) {
  return (
    <InfoWapper>
      <InfoInnerContent>
        <InfoIcon>
          <Icon color="#09f" size="48px" path={mdiInformation} />
        </InfoIcon>
        <InfoMessages>
          <InfoTitle>{props.title}</InfoTitle>
          <p>{props.description}</p>
        </InfoMessages>
      </InfoInnerContent>
    </InfoWapper>
  );
}

const InfoWapper = styled.div`
  display: flex;
  width: 373px;
  padding: 24px;
  align-items: center;
  justify-content: center;

  border: 1px solid ${transparentize("0.9","#274060")};
  background-color: #f3f8fa;
`;

const InfoInnerContent = styled.div`
  display: flex;
  gap: 24px;
  color: #274060;
`;

export const InfoIcon = styled.div``;

export const InfoMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`;
