import React from 'react';
import { ThemeDecorator } from '../../../static/themeDecorator';
import SearchBox from './index';

export default {
  title: 'components|Atoms/SearchBox',
  component: SearchBox,
  decorators: [ThemeDecorator],
};

export const searchBox = () => {
  return <SearchBox onSearch={() => {}} />;
};
searchBox.story = {
  name: 'Default',
};
