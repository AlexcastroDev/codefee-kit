import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Table, { TableProps, DataColumnDefinition } from 'components/Table';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CoffeeDistributor2019 from '../../stories/assets/coffee-distributor-2019';

export default {
  title: 'Controls/Table',
  component: Table,
} as Meta<TableProps>;

const StyledTable = styled(Table)`
  height: 90vh;
`;

const Template: Story<TableProps> = (args: TableProps) => <StyledTable {...args} />;
const baseProps = {
  data: CoffeeDistributor2019.map((c) => ({
    ...c,
    Rank: parseInt(c.Rank, 10),
    Bags: parseInt(c.Bags, 10),
    MetricTons: parseInt(c.MetricTons, 10),
    Pounds: parseInt(c.Pounds, 10),
  })),
  colDefs: [
    {
      id: 1, header: 'Rank', field: 'Rank', align: 'left',
    },
    {
      id: 2, header: 'Country', field: 'Country', align: 'left',
    },
    {
      id: 3, header: 'Bags', field: 'Bags', align: 'right',
    },
    {
      id: 4, header: 'MetricTons', field: 'MetricTons', align: 'right',
    },
    {
      id: 5, header: 'Pounds', field: 'Pounds', align: 'right',
    },
  ] as DataColumnDefinition[],
} as TableProps;

export const Default = Template.bind({});
Default.args = { ...baseProps };

export const WithFooter = Template.bind({});
WithFooter.args = {
  ...baseProps,
  footerDefs: [
    {
      id: 1, size: 2, align: 'left', value: 'TOTAL',
    },
    {
      id: 2, size: 1, align: 'right', value: CoffeeDistributor2019.reduce((a, c) => a + parseInt(c.Bags, 10), 0),
    },
    {
      id: 3, size: 1, align: 'right', value: CoffeeDistributor2019.reduce((a, c) => a + parseInt(c.MetricTons, 10), 0),
    },
    {
      id: 4, size: 1, align: 'right', value: CoffeeDistributor2019.reduce((a, c) => a + parseInt(c.Pounds, 10), 0),
    },
  ],
} as TableProps;

export const WithSort = Template.bind({});
WithSort.args = {
  ...baseProps,
  colDefs: baseProps.colDefs.map((c) => ({ ...c, sortable: true })),
} as TableProps;

export const WithRowClick = Template.bind({});
WithRowClick.args = {
  ...baseProps,
  onClickRow: action('Row Clicked!'),
} as TableProps;

export const WithCustomCellRender = Template.bind({});
WithCustomCellRender.args = {
  ...baseProps,
  colDefs: [
    {
      id: 1,
      header: 'Rank',
      field: 'Rank',
      align: 'left',
      render: (cellData) => {
        if ([1, 2, 3].includes(cellData)) {
          return (
            <span style={{ color: 'darkgoldenrod' }}>
              {cellData}
              {[...new Array(cellData)].map(() => '*')}
            </span>
          );
        }
        return cellData as ReactNode;
      },
    },
    {
      id: 2, header: 'Country', field: 'Country', align: 'left',
    },
    {
      id: 3, header: 'Bags', field: 'Bags', align: 'right',
    },
    {
      id: 4, header: 'MetricTons', field: 'MetricTons', align: 'right',
    },
    {
      id: 5, header: 'Pounds', field: 'Pounds', align: 'right',
    },
  ] as DataColumnDefinition[],
};

export const WithCustomCellRenderBaseOnRowData = Template.bind({});
WithCustomCellRenderBaseOnRowData.args = {
  ...baseProps,
  colDefs: [
    {
      id: 1,
      header: 'Rank',
      field: 'Rank',
      align: 'left',
      render: (cellData, rowData) => {
        const { Bags } = rowData;
        if (Bags > 10000000) {
          return (
            <span style={{ color: 'darkgoldenrod' }}>
              {cellData}
              {[...new Array(cellData)].map(() => '*')}
            </span>
          );
        }
        return cellData as ReactNode;
      },
    },
    {
      id: 2, header: 'Country', field: 'Country', align: 'left',
    },
    {
      id: 3, header: 'Bags', field: 'Bags', align: 'right',
    },
    {
      id: 4, header: 'MetricTons', field: 'MetricTons', align: 'right',
    },
    {
      id: 5, header: 'Pounds', field: 'Pounds', align: 'right',
    },
  ] as DataColumnDefinition[],
};
