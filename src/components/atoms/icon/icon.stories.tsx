import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { ReactComponent as SearchIc } from '../../../assets/icons/search.svg';
import { ThemeDecorator } from '../../../static/themeDecorator';
import { theme } from '../../../static/theme';
import Icon from './index';

export default {
  title: 'components|Atoms/Icon',
  component: Icon,
  decorators: [withKnobs, ThemeDecorator],
};

export const icon = () => {
  const size = select(
    'size',
    {
      small: 'small',
      medium: 'medium',
      large: 'large',
    },
    'medium',
  );
  const color = select(
    'color',
    {
      paleGray: theme.colors.g100,
      blue: theme.colors.blue,
      grayishBrown: theme.colors.g500,
    },
    theme.colors.blue,
  );
  return (
    <Icon size={size} color={color}>
      <SearchIc></SearchIc>
    </Icon>
  );
};
icon.story = {
  name: 'Default',
};
