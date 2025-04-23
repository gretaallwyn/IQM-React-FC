import type { Meta, StoryObj } from '@storybook/react';
import DropdownMenu from '../components/DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    size: 'Desktop',
    variant: 'Moodlet',
    state: 'primary',
    icon: true,
    label: 'LOR',
  },
};

export const MobileWithAllOptions: Story = {
  args: {
    size: 'Mobile',
    variant: 'Moodlet',
    showOption1: true,
    showOption2: true,
    showOption3: true,
    showOption4: true,
    state: 'green',
    mode: 'readOnly',
    label: 'Options',
  },
};
