import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import Icon from '../icon';
import Button, { ButtonProps } from '../button';

export interface IconButtonProps extends ButtonProps {
  left: boolean;
  icon: object;
  borderIconOnly: boolean;
}

const IconButton = (props: IconButtonProps): React.ReactElement<IconButtonProps> => {
  const { children, left, borderIconOnly, ...other } = props;

  return (
    <Button {...other}>
      <div className="label_wrapp">
        {left && <InnerIcon {...props} />}
        <div className="text_wrapp">{borderIconOnly ? <br /> : children}</div>
        {left || <InnerIcon {...props} />}
      </div>
    </Button>
  );
};

const InnerIcon = (props: IconButtonProps): React.ReactElement<IconButtonProps> => {
  const { children, left, icon, color, variant, borderIconOnly } = props;
  const theme = useContext(ThemeContext);

  let icColor: string;
  if (variant === 'contained' && color === theme.colors.g100) {
    icColor = theme.colors.g500;
  } else if (variant === 'contained') {
    icColor = theme.colors.g100;
  } else {
    icColor = color;
  }

  const StyledIcon = styled(Icon)`
    margin: 0 auto;
    ${!borderIconOnly &&
    children &&
    css`
      ${left &&
      css`
        padding-right: 8px;
      `}
      ${!left &&
      css`
        padding-left: 8px;
      `}
    `}
  `;

  const styledIcon = (
    <StyledIcon size="small" color={icColor}>
      {icon}
    </StyledIcon>
  );
  return borderIconOnly ? <div className="ic_wrapp">{styledIcon}</div> : styledIcon;
};

const StyledIconButton = styled(IconButton)`
  align-items: center;
  .label_wrapp {
    width: 100%;
    justify-content: inherit;
    display: flex;
    align-items: inherit;
    position: relative;
    .ic_wrapp {
      width: 100%;
      position: absolute;
    }
    .text_wrapp {
      flex: 1;
    }
  }
  ${({ children, borderIconOnly }) =>
    !children &&
    !borderIconOnly &&
    css`
      min-width: auto;
    `}
`;

IconButton.defaultProps = {
  type: 'button',
  corner: 'default',
  size: 'medium',
  onClick: () => {},
  disabled: false,
  variant: 'contain',
  color: 'black',
  left: false,
  borderIconOnly: false,
};

export default StyledIconButton;
