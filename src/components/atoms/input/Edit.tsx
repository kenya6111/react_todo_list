import styled from "styled-components";
export const Edit = (props) => {
  const { type, onChange, placeholder } = props;
  return <SInput type={type} onChange={onChange} placeholder={placeholder} />;
};

const SInput = styled.input``;
