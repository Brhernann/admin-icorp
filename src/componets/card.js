import React from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

const CardComponent = (_title, _description, _background, _loading) => {
  return (
    <div style={{ padding: '0 30px 30px 30px' }}>
      <Card
        style={{ width: 250, marginTop: 10 }}
        bordered={false}
        loading={_loading}
        bodyStyle={{
          background: _background,
          boxShadow: '7px 5px 5px #878787',
        }}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={_title}
          description={_description}
        />
      </Card>
    </div>
  );
};
export default CardComponent;
