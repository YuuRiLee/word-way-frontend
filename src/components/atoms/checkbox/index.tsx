import React, { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../icon';
import { ReactComponent as CheckmarkIc } from '../../../assets/icons/checkmark.svg';

export interface CheckboxProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked: boolean;
  className?: string;
}

const Checkbox = (props: CheckboxProps): React.ReactElement<CheckboxProps> => {
  const { className, ...other } = props;

  return (
    <div className={className}>
      <input className="inp-cbx" id="cbx" type="checkbox" {...other} />
      <label className="cbx" htmlFor="cbx">
        <div>
          <CheckboxIcon>
            <CheckmarkIc />
          </CheckboxIcon>
        </div>
      </label>
    </div>
  );
};

const StyledCheckbox = styled(Checkbox)`
  .inp-cbx {
    display: none;
  }
  ${({ theme }) => css`
    .cbx {
      margin: auto;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      div {
        display: inline-block;
        vertical-align: middle;
        position: relative;
        width: 18px;
        height: 18px;
        padding: 3px;
        border-radius: 10%;
        border-radius: 3px;
        vertical-align: middle;
        border: 1px solid ${theme.colors.g100};
        transition: all 0.2s ease;
        background: ${theme.colors.g100};
      }
      &:hover div {
        border-color: ${theme.colors.g200};
      }
    }
    .inp-cbx:checked + .cbx {
      div {
        background: ${theme.colors.g100};
        border-color: ${theme.colors.g100};
        svg {
          stroke-dashoffset: 0;
          transition: all 0.3s ease;
        }
      }
    }
  `}
`;

const CheckboxIcon = styled(Icon)`
  width: 100%;
  svg {
    fill: none;
    stroke: ${(props) => props.theme.colors.g500};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 20;
    stroke-dashoffset: 20;
    transition: all 0s ease;
    transition-delay: 0.1s;
  }
`;

Checkbox.defaultProps = {
  onChange: () => {},
  defaultChecked: false,
};

export default StyledCheckbox;
