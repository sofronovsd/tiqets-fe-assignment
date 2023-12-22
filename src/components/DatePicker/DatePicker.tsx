import React, {useState} from 'react';
import styled from "styled-components";

const Wrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  color: ${({disabled}) => disabled ? 'gray' : 'initial'};
`

const Label = styled.label`
  text-transform: uppercase;
`

const DateList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  gap: 4px;
  margin: 0;
  padding: 0;
  width: 100%;

  @media(max-width: 425px) {
    flex-wrap: wrap;
    max-height: 74px;
  }
`

const DateItem = styled.li<{ disabled: boolean, selected: boolean }>`
  display: flex;
  padding: 14px 0;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid ${({disabled}) => disabled ? 'gray' : '#000'};
  background-color: ${({disabled, selected}) => disabled ? '#EEE' : selected ? '#9B51E0' : '#FFF'};
  width: 100%;
  min-width: 64px;
  color: ${({disabled, selected}) => disabled ? 'gray' : selected ? '#FFF' : '#000'};
  
  
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

const LabelDayOfWeek = styled.span`
  text-align: center;
  font-family: Roboto Mono;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 100% */
  letter-spacing: 0.6px;
  text-transform: uppercase;
`

const LabelDayOfMonth = styled.span`
  text-align: center;
  font-family: Roboto Mono;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
`

const DateSeparator = styled.div<{ disabled: boolean }>`
  width: 1px;
  height: 40px;
  background-color: ${({disabled}) => disabled ? 'gray' : '#000'};
`

type Props = {
  label: string;
  dates: string[];
  disabled?: boolean;
  onDateSelect: (date: string) => void;
}
const DatePicker = ({label, dates, onDateSelect, disabled = false}: Props) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleOnClick = (date: string) => {
    if (disabled) return;
    setSelectedDate(date)
    onDateSelect(date);
  }

  return (
    <Wrapper disabled={disabled}>
      <Label htmlFor={label}>{label}</Label>
      <DateList id={label}>
        {dates.map((date, index) => {
          const dateObj = new Date(date);
          const [dayOfWeek, _, dayOfMonth] = dateObj.toDateString().split(' ');
          const hasNextDate = index + 1 < dates.length - 1;
          const hasSeparator = hasNextDate ? dateObj.getMonth() !== new Date(dates[index + 1] ).getMonth() : false;

          return (
            <React.Fragment key={date}>
              <DateItem disabled={disabled} selected={selectedDate === date} onClick={() => handleOnClick(date)}>
                <LabelDayOfWeek>{dayOfWeek}</LabelDayOfWeek>
                <LabelDayOfMonth>{dayOfMonth}</LabelDayOfMonth>
              </DateItem>
              {hasSeparator && (<DateSeparator disabled={disabled} />)}
            </React.Fragment>
          )
        })}
      </DateList>
    </Wrapper>
  );
};

export default DatePicker;
