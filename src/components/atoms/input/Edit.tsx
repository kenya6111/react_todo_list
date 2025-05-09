import styled from "styled-components";
export const Edit = (props) => {
  const { type,onClick,placeholder } = props;
  return <SInput type={type} onClick={onClick} placeholder={placeholder} />;
};

const SInput = styled.input`

`;
