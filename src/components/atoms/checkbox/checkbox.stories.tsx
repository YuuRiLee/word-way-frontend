import React from 'react';
import { ThemeDecorator } from '../../../static/themeDecorator';
import Checkbox from './index';

export default {
  title: 'components|Atoms/Checkbox',
  component: Checkbox,
  decorators: [ThemeDecorator],
};

export const checkbox = () => {
  return <Checkbox></Checkbox>;
};
checkbox.story = {
  name: 'Default',
};
