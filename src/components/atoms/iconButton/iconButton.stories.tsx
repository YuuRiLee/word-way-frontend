import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { ReactComponent as DelIc } from '../../../assets/icons/cross.svg';
import { ThemeDecorator } from '../../../static/themeDecorator';
import { theme } from '../../../static/theme';
import IconButton from './index';

export default {
  title: 'components|Atoms/IconButton',
  component: IconButton,
  decorators: [withKnobs, ThemeDecorator],
};

export const icon = () => {
  const color = select(
    'color',
    {
      paleGray: theme.colors.g100,
      blue: theme.colors.blue,
      grayishBrown: theme.colors.g500,
    },
    theme.colors.blue,
  );
  const corner = select(
    'corner',
    {
      default: 'default',
      rounded: 'rounded',
    },
    'rounded',
  );
  const variant = select(
    'variant',
    {
      text: 'text',
      outlined: 'outlined',
      contained: 'contained',
    },
    'contained',
  );
  const size = select(
    'size',
    {
      small: 'small',
      medium: 'medium',
      large: 'large',
    },
    'medium',
  );
  const left = boolean('left', false);
  return (
    <IconButton icon={<DelIc />} color={color} corner={corner} variant={variant} size={size} left={left}>
      <span>쫒다</span>
    </IconButton>
  );
};
icon.story = {
  name: 'Default',
};

export const buttonInnerIcon = () => {
  const color = select(
    'color',
    {
      paleGray: theme.colors.g100,
      blue: theme.colors.blue,
      grayishBrown: theme.colors.g300,
    },
    theme.colors.blue,
  );
  const variant = select(
    'variant',
    {
      text: 'text',
      outlined: 'outlined',
      contained: 'contained',
    },
    'outlined',
  );
  const size = select(
    'size',
    {
      small: 'small',
      medium: 'medium',
      large: 'large',
    },
    'medium',
  );
  return (
    <IconButton
      icon={<DelIc />}
      color={color}
      variant={variant}
      corner="rounded"
      borderIconOnly={true}
      size={size}
    ></IconButton>
  );
};

export const iconOnly = () => {
  const color = select(
    'color',
    {
      paleGray: theme.colors.g100,
      blue: theme.colors.blue,
      grayishBrown: theme.colors.g300,
    },
    theme.colors.blue,
  );
  const size = select(
    'size',
    {
      small: 'small',
      medium: 'medium',
      large: 'large',
    },
    'medium',
  );
  return <IconButton icon={<DelIc />} color={color} variant="text" size={size}></IconButton>;
};
