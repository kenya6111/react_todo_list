import styled from "styled-components";
export const Edit = (props) => {
  const { type, onChange, placeholder, value } = props;
  return (
    <SInput
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

const SInput = styled.input``;
