import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { theme } from '../../../static/theme';
import { ThemeDecorator } from '../../../static/themeDecorator';
import Button from './index';

export default {
  title: 'components|Atoms/Button', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Button, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs, ThemeDecorator], // 애드온 적용
};

export const button = () => {
  const size = select(
    'size',
    {
      small: 'small',
      medium: 'medium',
      large: 'large',
    },
    'medium',
  );
  return <Button size={size}>button</Button>;
};
button.story = {
  name: 'Default',
};

export const variantAttr = () => {
  const variant = select(
    'variant',
    {
      text: 'text',
      outlined: 'outlined',
      contained: 'contained',
    },
    'outlined',
  );
  return (
    <Button color={theme.colors.blue} variant={variant}>
      variant btn
    </Button>
  );
};
export const cornerAttr = () => {
  const corner = select(
    'corner',
    {
      default: 'default',
      rounded: 'rounded',
    },
    'default',
  );
  return (
    <Button color={theme.colors.blue} corner={corner}>
      corner btn
    </Button>
  );
};
export const mix = () => {
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
  return (
    <Button color={color} corner={corner} variant={variant} size={size}>
      mix btn
    </Button>
  );
};
