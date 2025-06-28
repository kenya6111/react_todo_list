import styled from "styled-components";

export const Input = (props) => {
  return <SInput {...props} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: none;
  border-radius: 9999px;
  outline: none;
`;
