import { transparentize } from "polished";
import styled from "styled-components";

export interface ProgressBarProps {
  theme: "primary" | "secondary";
  skill: string;
  progress: number;
  width?: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <ProgressBarWrapper style={{ width: props.width || "auto" }}>
      <TextShadow progress={props.progress} theme={props.theme}>
        {props.skill}
      </TextShadow>
      <CurrentProgress progress={props.progress} theme={props.theme}>
        <span>{props.skill}</span>
      </CurrentProgress>
    </ProgressBarWrapper>
  );
}

const ProgressBarWrapper = styled.div`
  position: relative;
  height: 24px;
  color: #fff;
  background-color: ${transparentize(0.85, "#274060")};
`;

const TextShadow = styled.span<{
  progress: number;
  theme: "primary" | "secondary";
}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding-left: 4px;
  display: flex;
  align-items: center;

  font-size: 14px;
  text-transform: lowercase;
  overflow: hidden;
  white-space: nowrap;

  color: #274060;
`;

const CurrentProgress = styled.div<{
  progress: number;
  theme: "primary" | "secondary";
}>`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 100%;
  width: ${(p) => p.progress}%;
  ${(p) => (p.progress > 0 ? "padding-left: 4px;" : "")}

  font-size: 14px;
  text-transform: lowercase;
  overflow: hidden;
  white-space: nowrap;

  background-color: ${(p) => (p.theme === "primary" ? "#09f" : "#274060")};

  transition: 0.25s ease;
`;
