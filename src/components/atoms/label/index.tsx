import React from 'react';
import styled, { css } from 'styled-components';

export interface LabelProps {
  children: React.ReactNode;
  color: string;
  size: 'medium' | 'large' | string;
  weight: 'light' | 'normal' | 'semi' | 'bold';
  className?: string;
}

const Label = (props: LabelProps): React.ReactElement<LabelProps> => {
  const { children, className } = props;

  return <div className={className}>{children}</div>;
};

const StyledLabel = styled(Label)((props) => {
  const { size, color, weight } = props;

  let fontSize;
  switch (size) {
    case 'large':
      fontSize = 24;
      break;
    case 'medium':
      fontSize = 15;
      break;
    case 'small':
      fontSize = 11;
      break;
  }
  fontSize = fontSize ? `${fontSize}px` : size;

  return css`
    font-weight: normal;
    color: ${color};
    padding: calc(${fontSize} * 0.1);
    font-size: ${fontSize};
    ${
      size === 'medium' &&
      css`
        font-weight: 500;
      `
    }
    ${
      weight === 'light' &&
      css`
        font-weight: 300;
      `
    }
    ${
      weight === 'semi' &&
      css`
        font-weight: 500;
      `
    }
    ${
      weight === 'bold' &&
      css`
        font-weight: bold;
      `
    }
  `;
});

Label.defaultProps = {
  size: 'medium',
  color: 'black',
  weight: 'normal',
};

export default StyledLabel;
