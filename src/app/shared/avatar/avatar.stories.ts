import { Meta, Story } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

export default {
  title: 'Shared / Avatar',
  component: AvatarComponent,
  parameters: {
    layout: 'centered',
    docs: {
      inlineStories: true,
    },
  },
  decorators: [],
} as Meta;

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  props: args
});

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {
  avatarData: {name: 'Joe Sample', avatarImageSrc: 'assets/avataaars.png'}
};


