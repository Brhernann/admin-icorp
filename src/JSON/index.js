import React from 'react';
export const columns = [
  { title: 'Empresa', dataIndex: 'Enterprise_Name', key: 'Enterprise_Name' },
  { title: 'Contacto', dataIndex: 'Contact_Name', key: 'Contact_Name' },
  { title: 'Email', dataIndex: 'Mail', key: 'Mail' },
  { title: 'Experto', dataIndex: 'Expert', key: 'Expert' },
  {
    title: '',
    dataIndex: '',
    key: 'x',
    render: () => <a href="javascript:;">Ver Detalle</a>,
  },
];
