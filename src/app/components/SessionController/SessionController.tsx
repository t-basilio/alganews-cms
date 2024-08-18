import Button from "../Button/Button";
import * as SC from "./SessionController.styles";

export interface SessionControllerProps {
  name: string;
  description: string;
  onLougout?: () => any;
}

function SessionController(props: SessionControllerProps) {
  return (
    <SC.Wrapper>
      <SC.Avatar src="https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?q=80&w=1000&ixlib=rb-1.2.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <SC.Name> {props.name}</SC.Name>
      <SC.Description>{props.description}</SC.Description>
      <Button label="Logout" variant="danger" onClick={props.onLougout} />
    </SC.Wrapper>
  );
}

export default SessionController;
