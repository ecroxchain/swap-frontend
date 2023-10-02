import React from "react";
import styled from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
  showSkeleton?: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd, color = "#ffffff", showSkeleton = true }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="http://ecroxswap.com/swap"
      target="_blank"
    >
      <LogoRound width="30px" mr="8px"/>
      {/* <Text color={color} ml="10px" bold>{`$${cakePriceUsd.toFixed(8)}`}</Text> */}
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={24} />
  ) : null;
};

export default React.memo(CakePrice);
