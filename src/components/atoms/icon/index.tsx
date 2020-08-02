import React from 'react';
import styled, { css } from 'styled-components';

export interface IconProps {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  className?: string;
  color: string;
}

const Icon = (props: IconProps): React.ReactElement<IconProps> => {
  const { children, className } = props;

  return <span className={className}>{children}</span>;
};

const StyledIcon = styled(Icon)((props) => {
  const { size, color } = props;
  const fontSize = !size || size === 'medium' ? 1.1 : size === 'small' ? 0.8 : 1.8;

  return css`
    width: 1em;
    height: 100%;
    font-size: ${fontSize + 'em'};
    display: flex;
    svg {
      width: 100%;
      height: 100%;
      fill: ${color};
    }
  `;
});

Icon.defaultProps = {
  size: 'medium',
  color: 'black',
};

export default StyledIcon;
