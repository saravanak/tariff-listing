import { A } from '@ember/array';

export const tariffs = A([
  {
    validFrom: '2020-06-10',
    expires: '2020-06-15',
    type: "20' Standard",
    schedulesCount: 4,
    supplierCode: 'APLS',
    charges: [
      {
        amount: 45,
        currency: 'USD',
        description: 'Import Security Filing (437)',
      },
      {
        amount: 65,
        currency: 'USD',
        description: 'Turnover/Release (519)',
      },
    ],
  },
  {
    validFrom: '2020-03-01',
    expires: '2020-05-01',
    type: "40' High Cube",
    schedulesCount: 0,
    supplierCode: 'APLS',
    charges: [
      {
        amount: 35,
        currency: 'GBP',
        description: 'Import Security Filing (437)',
      },
      {
        amount: 50,
        currency: 'GBP',
        description: 'Turnover/Release (519)',
      },
    ],
  },
  {
    validFrom: '2020-07-15',
    expires: '2020-08-15',
    type: "20' Standard",
    schedulesCount: 0,
    supplierCode: 'CMDU',
    charges: [
      {
        amount: 45,
        currency: 'USD',
        description: 'Import Security Filing (437)',
      },
      {
        amount: 65,
        currency: 'USD',
        description: 'Turnover/Release (519)',
      },
    ],
  },
  {
    validFrom: '2020-09-13',
    expires: '2020-09-23',
    type: "40' Standard",
    schedulesCount: 3,
    supplierCode: 'MAEU',
    charges: [
      {
        amount: 45,
        currency: 'USD',
        description: 'Import Security Filing (437)',
      },
      {
        amount: 65,
        currency: 'USD',
        description: 'Turnover/Release (519)',
      },
    ],
  },
  {
    validFrom: '2020-08-03',
    expires: '2020-08-20',
    type: "40' Reefer",
    schedulesCount: 2,
    supplierCode: 'MAEU',
    charges: [
      {
        amount: 45,
        currency: 'USD',
        description: 'Import Security Filing (437)',
      },
      {
        amount: 65,
        currency: 'USD',
        description: 'Turnover/Release (519)',
      },
    ],
  },
  {
    validFrom: '2020-08-03',
    expires: '2020-08-20',
    type: "40' Reefer",
    schedulesCount: 2,
    supplierCode: 'MAEU',
    charges: [
      {
        amount: 45,
        currency: 'USD',
        description: 'Import Security Filing (437)',
      },
      {
        amount: 65,
        currency: 'USD',
        description: 'Turnover/Release (519)',
      },
    ],
  },
  {
    validFrom: '2020-08-03',
    expires: '2020-08-20',
    type: "40' Reefer",
    schedulesCount: 2,
    supplierCode: 'MAEU',
    charges: [
      {
        amount: 45,
        currency: 'USD',
        description: 'Import Security Filing (437)',
      },
      {
        amount: 65,
        currency: 'USD',
        description: 'Turnover/Release (519)',
      },
    ],
  },
  {
    validFrom: '2020-08-03',
    expires: '2020-08-20',
    type: "40' Reefer",
    schedulesCount: 2,
    supplierCode: 'MAEU',
    charges: [
      {
        amount: 45,
        currency: 'USD',
        description: 'Import Security Filing (437)',
      },
      {
        amount: 65,
        currency: 'USD',
        description: 'Turnover/Release (519)',
      },
    ],
  },
  {
    validFrom: '2020-08-03',
    expires: '2020-08-20',
    type: "40' Reefer",
    schedulesCount: 2,
    supplierCode: 'MAEU',
    charges: [
      {
        amount: 45,
        currency: 'USD',
        description: 'Import Security Filing (437)',
      },
      {
        amount: 65,
        currency: 'USD',
        description: 'Turnover/Release (519)',
      },
    ],
  },
  {
    validFrom: '2020-08-03',
    expires: '2020-08-20',
    type: "40' Reefer",
    schedulesCount: 2,
    supplierCode: 'MAEU',
    charges: [
      {
        amount: 45,
        currency: 'USD',
        description: 'Import Security Filing (437)',
      },
      {
        amount: 65,
        currency: 'USD',
        description: 'Turnover/Release (519)',
      },
    ],
  },
]);

export const suppliers = [
  {
    name: 'CMA CGM',
    code: 'CMDU',
  },
  {
    name: 'American President Lines Ltd.',
    code: 'APLS',
  },
  {
    name: 'Maersk Line',
    code: 'MAEU',
  },
  {
    name: 'COSCO Container Lines',
    code: 'COSU',
  },
  {
    name: 'Mediterranean Shipping Company S.A.',
    code: 'MSCU',
  },
];
