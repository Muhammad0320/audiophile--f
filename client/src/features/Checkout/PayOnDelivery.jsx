import { styled } from "styled-components";
import SVG from "react-inlinesvg";
import { IconMoney } from "../../ui/Icons";
import { Text } from "../../ui/Text";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5rem;
`;

const IconContainer = styled.div`
  width: 5%;
`;

function PayOnDelivery() {
  return (
    <StyledContainer>
      <IconContainer>
        <SVG src={IconMoney} />
      </IconContainer>
      <Text>
        {" "}
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.{" "}
      </Text>
    </StyledContainer>
  );
}

export default PayOnDelivery;
