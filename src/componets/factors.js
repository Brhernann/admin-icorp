import React from 'react';
import { Card } from 'antd';
import factors from '../JSON/factors.json';

const FactorComponentsList = () => {
  return (
    <div
      style={{
        padding: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {factors.data.map((item, i) => (
        <Card
          title={item.FactorName}
          bordered={false}
          key={i}
          size="small"
          style={{ width: 300, marginTop: '30px' }}
        >
          <ul>
            {item.SubFactor.map((subfactor, i) => (
              <li key={i}>
                <b>{'F' + subfactor.index + ': '}</b>
                {subfactor.name}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
};
export default FactorComponentsList;
