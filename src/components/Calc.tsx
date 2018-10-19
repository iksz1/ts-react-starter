import React from "react";
import { connect } from "react-redux";
import { Result, addNumber } from "../store/reducer";
import styled from "styled-components";

const Button = styled.button`
  background: inherit;
  color: inherit;
  border: 1px solid tan;
  font-size: 2rem;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const mapStateToProps = (state: Result) => ({
  sum: state,
});

const mapDispatchToProps = {
  increaseByOne: () => addNumber(1),
};

type PFS = ReturnType<typeof mapStateToProps>;
type PFD = typeof mapDispatchToProps;
interface IProps extends PFS, PFD {}

const Calc = ({ sum, increaseByOne }: IProps) => (
  <Wrapper>
    <h1>Click the button to see something cool!</h1>
    <Button onClick={increaseByOne}>+</Button>
    <h1>{sum}</h1>
  </Wrapper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calc);
