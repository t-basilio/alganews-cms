import "react-loading-skeleton/dist/skeleton.css";

import { transparentize } from "polished";
import styled from "styled-components";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import FieldDescriptor from "../components/FieldDescriptor/FieldDescriptor";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { getEditorDescription, User } from "t-basilio-sdk";
import useSingleEditor from "../../core/hooks/useSingleEditor";
import useAuth from "../../core/hooks/useAuth";

interface EditorProfileProps {
  hidePersonalData?: boolean;
}

export default function EditorProfile(props: EditorProfileProps) {
  const params = useParams<{ id: string }>();

  const { editor, fetchEditor } = useSingleEditor();
  const { user } = useAuth();

  const editorsIsAuthenticatedUser = useMemo(
    () => Number(params.id) === user?.id,
    [user, params.id]
  );

  const editorData = useMemo(
    () => (editorsIsAuthenticatedUser ? user : editor),
    [editorsIsAuthenticatedUser, user, editor]
  );

  useEffect(() => {
    if (!editorsIsAuthenticatedUser) fetchEditor(Number(params.id));
  }, [fetchEditor, params.id, editorsIsAuthenticatedUser]);

  return (
    <EditorProfileWrapper>
      <EditorHeadLine>
        <Avatar src={editorData?.avatarUrls.small} />
        <Name>{editorData?.name}</Name>

        {editorData?.createdAt && (
          <Description>
            {getEditorDescription(new Date(editorData.createdAt))}
          </Description>
        )}
      </EditorHeadLine>
      <Divisor />
      <EditorFeatures>
        <PersonalInfo>
          {editorData?.bio && <Biography>{editorData?.bio}</Biography>}
          <Skills>
            {editorData?.skills?.map((skill) => {
              return (
                <ProgressBar
                  key={skill.name}
                  level={skill.percentage}
                  skill={skill.name}
                  theme="primary"
                />
              );
            })}
          </Skills>
        </PersonalInfo>
        <ContactInfo>
          {editorData?.location.city && (
            <FieldDescriptor
              field={"Cidade"}
              value={editorData?.location.city}
            />
          )}
          {editorData?.location.state && (
            <FieldDescriptor
              field={"Estado"}
              value={editorData?.location.state}
            />
          )}

          {(editorData as User.Detailed)?.phone && (
            <FieldDescriptor
              field={"Telefone"}
              value={(editorData as User.Detailed)?.phone}
            />
          )}

          {(editorData as User.Detailed)?.email && (
            <FieldDescriptor
              field={"Email"}
              value={(editorData as User.Detailed)?.email}
            />
          )}

          {(editorData as User.Detailed)?.birthdate && (
            <FieldDescriptor
              field={"Nascimento"}
              value={(editorData as User.Detailed)?.birthdate}
            />
          )}
        </ContactInfo>
      </EditorFeatures>

      {(editorData as User.Detailed)?.metrics && (
        <>
          <EditorEarnings>
            <ValueDescriptor
              color={"default"}
              value={(editorData as User.Detailed)?.metrics.weeklyWords}
              description={"Palavras nesta semana"}
            />
            <ValueDescriptor
              color={"default"}
              value={(editorData as User.Detailed)?.metrics.monthlyWords}
              description={"Palavras no mês"}
            />
            <ValueDescriptor
              color={"default"}
              value={(editorData as User.Detailed)?.metrics.lifetimeWords}
              description={"Total de palavras"}
            />
            <ValueDescriptor
              color={"primary"}
              value={(editorData as User.Detailed)?.metrics.weeklyEarnings}
              description={"Ganhos na semana"}
              isCurrency
            />
            <ValueDescriptor
              color={"primary"}
              value={(editorData as User.Detailed)?.metrics.monthlyEarnings}
              description={"Ganhos no mês"}
              isCurrency
            />
            <ValueDescriptor
              color={"primary"}
              value={(editorData as User.Detailed)?.metrics.lifetimeEarnings}
              description={"Ganhos no total"}
              isCurrency
            />
          </EditorEarnings>
        </>
      )}
    </EditorProfileWrapper>
  );
}

const EditorProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;

  color: #274060;
  border: 1px solid ${transparentize("0.9", "#276040")};
`;

const EditorHeadLine = styled.div`
  display: grid;
  grid-auto-rows: 2;
  grid-template-columns: 48px auto;
  gap: 8px 16px;
  height: 48px;
`;

const Avatar = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  object-fit: contain;
  width: 48px;
  height: 48px;
`;

const Name = styled.h1`
  font-size: 18px;
  font-weight: 400;
  grid-column-start: 2;
`;

const Description = styled.span`
  font-size: 12px;
  grid-column-start: 2;
`;

const Divisor = styled.div`
  border-bottom: 1px solid ${transparentize("0.9", "#274060")};
`;

const EditorFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  gap: 24px;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Biography = styled.p`
  font-size: 12px;
  line-height: 20px;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 0;

  > * {
    width: 100%;
  }

  & > :nth-child(1),
  & > :nth-child(2) {
    width: 50%;
  }
`;

const EditorEarnings = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 24px;
`;
