import React from 'react';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import Card from './index';
import { ThemeDecorator } from '../../../static/themeDecorator';
import { WordPart } from '../../../utils/types';

export default {
  title: 'components|Molecules/Card',
  component: Card,
  decorators: [withKnobs, ThemeDecorator],
};

const cardValue = {
  id: '00000000-0000-0000-0000-000000000001',
  pronunciation: '떼다',
  related_pronunciations: ['감자'],
  words: [
    {
      contents: '붙어 있거나 잇닿은 것을 떨어지게 하다.',
      id: '00000000-0000-0000-0000-000000000003',
      part: 'verb' as WordPart,
      related_pronunciations: ['고구마'],
    },
  ],
};

const multiCardValue = {
  id: '00000000-0000-0000-0000-000000000001',
  pronunciation: '떼다',
  related_pronunciations: [],
  words: [
    {
      contents: '붙어 있거나 잇닿은 것을 떨어지게 하다.',
      id: '00000000-0000-0000-0000-000000000003',
      part: 'verb' as WordPart,
      related_pronunciations: [],
    },
    {
      contents: '남에게서 빌려 온 돈 따위를 돌려주지 않다.',
      id: '00000000-0000-0000-0000-000000000007',
      part: 'verb' as WordPart,
      related_pronunciations: [],
    },
  ],
};

export const card = () => {
  const canDel = boolean('canDel', true);
  const data = object('data', cardValue, 'card data');
  return <Card canDel={canDel} data={data}></Card>;
};
card.story = {
  name: 'Default',
};

export const multiCard = () => {
  const canDel = boolean('canDel', true);
  const data = object('data', multiCardValue, 'card data');
  return <Card canDel={canDel} data={data}></Card>;
};
