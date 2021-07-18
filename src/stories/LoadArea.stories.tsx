import AppContainer from 'components/AppContainer';
import LoadArea, { LoadAreaProps } from 'components/LoadArea';
import React from 'react';
import styles from './assets/styles/LoadArea.module.scss';
import { Meta, Story } from '@storybook/react/types-6-0';
import Typography from 'components/Typography';
import CircularProgress from 'components/CircularProgress';
/* eslint-disable no-alert */

export default {
  title: 'Layout/Load Area',
  component: LoadArea,
} as Meta;

const Template: Story<LoadAreaProps> = (args) => {
  return (
    <AppContainer>
      <LoadArea
        className={styles.loadArea}

        {...args}
      >
        <Typography>
          Content
        </Typography>
      </LoadArea>
    </AppContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  loading: true,
} as LoadAreaProps;

export const CustomLoader = Template.bind({});
CustomLoader.args = {
  loading: true,
  renderLoader: () => <CircularProgress color='secondary' />,
} as LoadAreaProps;

export const CustomHTMLTag = Template.bind({});
CustomHTMLTag.args = {
  loading: true,
  tag: 'div'
} as LoadAreaProps;
