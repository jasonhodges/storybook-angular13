import { MatListModule } from '@angular/material/list';
import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { AvatarComponent } from '../avatar/avatar.component';
import { AvatarListComponent } from './avatar-list.component';

export default {
  title: 'Shared / Avatar List',
  component: AvatarListComponent,
  parameters: {
    layout: 'centered',
    docs: {
      inlineStories: true,
    },
  },
  decorators: [
    componentWrapperDecorator((story) => `<div style="margin: 4em">${story}</div>`),
    moduleMetadata({
      imports: [MatListModule],
      declarations: [AvatarComponent],
    }),
  ],
} as Meta;

const Template: Story<AvatarListComponent> = (args: AvatarListComponent) => ({
  props: args
});

export const AvatarListDefault = Template.bind({});
AvatarListDefault.args = {
  listItems: [
    {name: 'Joe Sample', avatarImageSrc: 'assets/avataaars.png'},
    {name: 'Joe Sample', avatarImageSrc: 'assets/avataaars.png'},
    {name: 'Joe Sample', avatarImageSrc: 'assets/avataaars.png'}
  ]
};

