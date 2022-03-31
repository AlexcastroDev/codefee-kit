import CalendarPanel from 'components/CalendarPanel';
import Input from 'components/Input';
import styled, { css } from 'styled-components';
import TimePanel from 'components/TimePanel';
import { Clock } from 'components/Icons';
import { cvar, makeCssVar, rem } from 'utils/StyleHelper';

export type CalendarPanelCssVar = {
  '--cf-date-time-picker-background-color': string;
};

const [defaultCssVar, cssVar] = makeCssVar<CalendarPanelCssVar>({
  '--cf-date-time-picker-background-color': cvar('--control-bg-color'),
});

export const DateTimeInput = styled(Input)`
  min-width: ${rem(280)};
`;

export const DateTimeSelector = styled.div`
  ${defaultCssVar};
  background-color: ${cssVar('--cf-date-time-picker-background-color')};
  position: absolute;
  box-shadow: ${cvar('--control-shadow')};
`;

export const OptionBar = styled.div`
  height: ${rem(48)};
  box-sizing: border-box;
  border-bottom: ${rem(1)} solid ${cvar('--color-gray-3')};
  display: flex;
`;

const ActiveButtonCss = css`
  border-bottom-color: ${cvar('--color-primary-dark')};
  color: ${cvar('--color-primary-dark')};
`;

export const OptionButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  border: none;
  border-bottom: ${rem(4)} solid transparent;
  background-color: ${cssVar('--cf-date-time-picker-background-color')};
  transition: border-bottom-color ${cvar('--transition-hover')}, color ${cvar('--transition-hover')};

  &:hover{
    border-bottom-color: ${cvar('--color-primary-light')};
    color: ${cvar('--color-primary-light')};
  }

  &:active{
    ${ActiveButtonCss};
  }

  ${({ isActive }) => isActive && ActiveButtonCss};
`;

export const DateSelector = styled(CalendarPanel)`
  --cf-calendar-panel-background-color: ${cssVar('--cf-date-time-picker-background-color')};
  box-shadow: none;
`;

export const TimeSelector = styled(TimePanel)`
  --cf-time-panel-background-color: ${cssVar('--cf-date-time-picker-background-color')};
  min-width: ${rem(368)};
  box-shadow: none;
`;

export const ClockIcon = styled(Clock)`
  font-size: ${rem(20)};
`;
