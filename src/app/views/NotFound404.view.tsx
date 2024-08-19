import styled from "styled-components";
import NotFound from "../../assets/not_found.svg";
import Button from "../components/Button/Button";
import { useHistory } from "react-router-dom";

export default function NotFound404() {
  const history = useHistory();

  return (
    <NotFound404Wrapper>
      <span>Oops!</span>
      <h1>Não encontramos essa página</h1>
      <img src={NotFound} alt="Não encontrado" />
      <Button
        option="primary"
        label={"Ir para a home"}
        onClick={() => history.replace("/")}
      />
    </NotFound404Wrapper>
  );
}

const NotFound404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  gap: 32px;

  span {
    font-size: 72px;
  }

  h1 {
    font-size: 18px;
    font-weight: 400;
  }
`;
