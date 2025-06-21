import styled from "styled-components";
export const Check = (props) => {
  const { type, onClick, placeholder } = props;
  return <SInput type={type} onClick={onClick} placeholder={placeholder} />;
};

const SInput = styled.input``;
