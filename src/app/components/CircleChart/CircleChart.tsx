import * as CC from "./CircleChart.styles";
import { useEffect, useState } from "react";

export interface CircleChartProps {
  size: number;
  progress: number;
  caption?: string;
  theme?: "primary" | "default";
  strokeWidth?: number;
}

function CircleChart(props: CircleChartProps) {
  // função para recuperar a cor do circlo chart com base no tema
  const getThemeColor = () => (props.theme === "primary" ? "#09f" : "#274060");

  // setup (configurações de cor, botda, etc.)
  const THEME = getThemeColor();
  const STROKE_WIDTH = props.strokeWidth || 8;
  const STROKE_COLOR = THEME;

  //matemática da coisa
  const CENTER = props.size / 2;
  const RADIUS = CENTER - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  // estado do offset
  const [offset, setOffset] = useState(CIRCUMFERENCE);

  // observador para animar o offset
  useEffect(() => {
    const progressOffset = ((100 - props.progress) / 100) * CIRCUMFERENCE;
    setOffset(progressOffset);
  }, [setOffset, CIRCUMFERENCE, props.progress, offset]);

  return (
    <CC.Wrapper>
      <CC.SvgWrapper style={{ width: props.size, height: props.size }}>
        <CC.Svg width={props.size} height={props.size}>
          <CC.CircleBG cy={CENTER} cx={CENTER} r={RADIUS} />
          <CC.Circle
            fill="none"
            cy={CENTER}
            cx={CENTER}
            r={RADIUS}
            stroke={STROKE_COLOR}
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </CC.Svg>
        <CC.Percentage color={THEME}>{props.progress}%</CC.Percentage>
      </CC.SvgWrapper>
      {props.caption && <CC.Caption>{props.caption}</CC.Caption>}
    </CC.Wrapper>
  );
}

export default CircleChart;
