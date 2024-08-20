import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styled from "styled-components";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";
import { useEffect, useState } from "react";
import { User } from "../../sdk/@types";
import UserService from "../../sdk/services/User.service";
import withBoundary from "../../core/hoc/withBoundary";

function UserEarnings() {
  const [user, setUser] = useState<User.Detailed>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    UserService.getDetailedUser(7)
      .then(setUser)
      .catch((error) => setError(new Error(error.message)));
  }, []);

  if (error) throw error;

  if (!user)
    return (
      <UserEarningsWrapper style={ { height: 123 } }>
        <Skeleton width={150} height={40} />
        <Skeleton width={150} height={40} />
        <Skeleton width={150} height={40} />
        <Skeleton width={150} height={40} />
      </UserEarningsWrapper>
    );

  return (
    <UserEarningsWrapper>
      <ValueDescriptor
        color="primary"
        description="Ganhos no mês"
        value={user.metrics.monthlyEarnings}
        isCurrency
      />
      <ValueDescriptor
        color="primary"
        description="Ganhos na semana"
        value={user.metrics.weeklyEarnings}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="Ganhos de sempre"
        value={user.metrics.lifetimeEarnings}
        isCurrency
      />
      <ValueDescriptor
        description="Total de palavras"
        value={user.metrics.lifetimeWords}
      />
    </UserEarningsWrapper>
  );
}

export default withBoundary(UserEarnings, "ganhos");

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
