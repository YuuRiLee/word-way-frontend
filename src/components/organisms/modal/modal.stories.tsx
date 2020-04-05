import React from 'react';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';
import { ThemeDecorator } from '../../../static/themeDecorator';
import Modal from './index';

export default {
    title: 'components|Organisms/Modal',
    component: Modal,
    decorators: [withKnobs, ThemeDecorator],
};

export const header = () => {
    return <Modal></Modal>;
};
header.story = {
    name: 'Default',
};
