import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { theme } from '../../../static/theme';
import Label from './index';

export default {
  title: 'components|Atoms/Label',
  component: Label,
  decorators: [withKnobs],
};

export const label = () => {
  const color = select(
    'color',
    {
      blackTwo: theme.colors.b100,
      deepSkyBlue: theme.colors.blue,
    },
    'black-two',
  );
  const weight = select(
    'weight',
    {
      light: 'light',
      normal: 'normal',
      semi: 'semi',
      bold: 'bold',
    },
    'bold',
  );
  return (
    <Label color={color} weight={weight} size="large">
      필터링
    </Label>
  );
};
label.story = {
  name: 'Default',
};

export const medium = () => <Label size="medium">결과 내 재검색</Label>;

export const custom = () => {
  const color = select(
    'color',
    {
      grayishBrown: theme.colors.g300,
      lightGray: theme.colors.g100,
    },
    theme.colors.g300,
  );
  const weight = select(
    'weight',
    {
      light: 'light',
      normal: 'normal',
      semi: 'semi',
      bold: 'bold',
    },
    'light',
  );
  const size = text('size', '13px');
  return (
    <Label color={color} weight={weight} size={size}>
      [동사] 어떤 목표로 뜻이 쏠리어 향하다.
    </Label>
  );
};
