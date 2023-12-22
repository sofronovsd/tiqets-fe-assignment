import React, {ReactEventHandler} from 'react';
import styled from "styled-components";

const Wrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  color: ${({disabled}) => disabled ? 'gray' : 'initial'};
`

const Label = styled.label`
  text-transform: uppercase;
`

const Select = styled.select<{ disabled: boolean }>`
  display: flex;
  padding: 16px 12px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({disabled}) => disabled ? 'gray' : '#000'};
  background-color: ${({disabled}) => disabled ? '#EEE' : '#FFF'};

  color: ${({disabled}) => disabled ? 'gray' : '#000'};

  font-family: Roboto Mono;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  appearance: none;

  background-image: ${({disabled}) => disabled ? 'url(\'/icons/arrow_drop_down_disabled.svg\')' : 'url(\'/icons/arrow_drop_down.svg\')' };
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
`

const Option = styled.option`
  text-transform: capitalize;
`

type Props = {
  label: string;
  options: string[];
  onChange: ReactEventHandler<HTMLSelectElement>;
  disabled?: boolean;
}

const Dropdown = ({label, options, onChange, disabled = false}: Props) => {
  return (
    <Wrapper disabled={disabled}>
      <Label htmlFor={label}>{label}</Label>
      <Select name={label} id={label} disabled={disabled} onChange={onChange} defaultValue="">
        <Option hidden disabled value="">Choose the {label.toLowerCase()}</Option>
        {options.map(option => (<Option key={option} value={option}>{option}</Option>))}
      </Select>
    </Wrapper>
  );
};

export default Dropdown;
