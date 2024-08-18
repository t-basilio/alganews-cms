import confirm from "../../../core/utils/confirm";
import info from "../../../core/utils/info";
import Logo from "../../components/Logo";
import NavBar from "../../components/NavBar";
import SessionController from "../../components/SessionController";
import * as DL from "./Default.layout.styles";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <DL.Wrapper>
      <DL.Header>
        <Logo />
      </DL.Header>
      <DL.Main>
        <DL.Navigation>
          <NavBar />
        </DL.Navigation>
        <DL.FeaturedContent>{props.children}</DL.FeaturedContent>
        <DL.Aside>
          <SessionController
            name="Thiago Basilio"
            description="Editor ha 2 anos"
            onLougout={() => {
              confirm({
                title: "Você quer sair ?",
                onConfirm: () => {
                  info({
                    title: "Você fez logout",
                    description: "Você será redirecionado para página de login"
                  })
                },
                onCancel: () => window.alert('continuar')
              })
            }}
          />
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  );
}

export default DefaultLayout;
