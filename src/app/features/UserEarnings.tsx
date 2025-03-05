import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styled from "styled-components";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";
import { useEffect } from "react";
import withBoundary from "../../core/hoc/withBoundary";
import useUser from "../../core/hooks/useUser";

function UserEarnings() {
  const { detailedUser, fetchUser} = useUser();

  useEffect(() => {
      fetchUser()
  }, [fetchUser]);

  if (!detailedUser)
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
        value={detailedUser.metrics.monthlyEarnings}
        isCurrency
      />
      <ValueDescriptor
        color="primary"
        description="Ganhos na semana"
        value={detailedUser.metrics.weeklyEarnings}
        isCurrency
      />
      <ValueDescriptor
        color="default"
        description="Ganhos de sempre"
        value={detailedUser.metrics.lifetimeEarnings}
        isCurrency
      />
      <ValueDescriptor
        description="Total de palavras"
        value={detailedUser.metrics.lifetimeWords}
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
