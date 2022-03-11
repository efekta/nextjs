import {Input} from '@/ui';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'UI-Kit / Input',
    component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (): JSX.Element => <Input/>;

export const Playground = Template.bind({});
Playground.args = {};
