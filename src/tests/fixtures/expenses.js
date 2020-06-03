import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Gum',
    note: 'Yum',
    amount: 400,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'Rent',
    note: 'Yum',
    amount: 1400,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'Credit Card',
    note: 'Yum',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf(),
  },
];
