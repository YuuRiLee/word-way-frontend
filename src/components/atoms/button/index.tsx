import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps {
  type: 'button' | 'reset' | 'submit';
  corner: 'default' | 'rounded';
  size: 'small' | 'medium' | 'large';
  variant: 'text' | 'outlined' | 'contained';
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled: boolean;
  color: string;
}

const Button = (props: ButtonProps): React.ReactElement<ButtonProps> => {
  const { children, ...other } = props;

  return <button {...other}>{children}</button>;
};

const StyledButton = styled(Button)((props) => {
  const { color, disabled, size, variant, theme, corner } = props;
  const fontSize = !size || size === 'medium' ? 1.1 : size === 'small' ? 0.8 : 1.8;

  return css`
    background: transparent;
    border-radius: 4px;
    color: ${theme.colors.g500};
    padding: 6px 14px;
    min-width: 70px;
    letter-spacing: -0.9px;
    font-weight: 500;
    font-size: ${fontSize + 'em'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    cursor: pointer;
    outline: 0;
    ${variant === 'text' &&
    css`
      border: 0;
    `}

    ${variant === 'contained' &&
    css`
      color: ${theme.colors.g100};
      background: ${color};
      border: 1px solid ${color};
    `}

    ${variant === 'outlined' &&
    css`
      color: ${color};
      border: 1px solid ${color === theme.colors.g500 ? theme.colors.g200 : color};
    `}

    ${corner === 'rounded' &&
    css`
      border-radius: ${fontSize * 1.25 + 'rem'};
    `}

    ${variant === 'contained' &&
    color === theme.colors.g100 &&
    css`
      color: ${theme.colors.g500};
      background: ${color};
      border: 1px solid ${color};
    `}

    ${size === 'small' &&
    css`
      min-width: 90px;
    `}
  `;
});

Button.defaultProps = {
  type: 'button',
  corner: 'default',
  size: 'medium',
  onClick: () => {},
  disabled: false,
  variant: 'contain',
  color: 'black',
};

export default StyledButton;
