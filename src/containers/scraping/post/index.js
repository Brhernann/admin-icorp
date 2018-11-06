import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Divider } from 'antd';
import {
  task_post_error,
  task_post_end,
} from '../../../config/redux/actions/fetch';
import CardComponent from '../../../componets/card';
import ReactHtmlParser from 'react-html-parser';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_error: props.Post.post_error,
      post_end: props.Post.post_end,
      loading: props.Post.isFetching,
      Proc_Descript: ReactHtmlParser('<b>NO PROCESA</b>'),
      Error_Descriptions: ReactHtmlParser(
        'Cantidad total: <b>' + props.Post.post_error.length + '</b>'
      ),
      End_Descriptions: ReactHtmlParser(
        'Cantidad total: <b>' + props.Post.post_end.length + '</b>'
      ),
    };
  }

  async componentDidMount() {
    await this.props.FetchPostError({
      key: 'update-posts',
      state: 'error',
    });

    await this.props.FetchPostEnd({
      key: 'update-posts',
      state: 'end',
    });
  }

  componentWillUnmount() {
    console.log('bye');
  }

  componentWillReceiveProps(prevProps) {
    this.setState({ loading: prevProps.Post.isFetching });
  }

  title = _title => {
    return (
      <div style={{ display: 'flex', padding: '0 0 0 30px' }}>
        <h2>{_title}</h2>
      </div>
    );
  };

  render() {
    const {
      post_error,
      Error_Descriptions,
      End_Descriptions,
      Proc_Descript,
      loading,
    } = this.state;

    post_error.map((e, i) => {
      console.log(e);
    });
    const columns = [
      { title: 'User Bot', dataIndex: 'name', key: 'name' },
      { title: 'Finalizados', dataIndex: 'age', key: 'age' },
      { title: 'Errores', dataIndex: 'address', key: 'address' },
    ];
    const data = [
      {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description:
          'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      },
      {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description:
          'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
      },
      {
        key: 3,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        description:
          'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
      },
    ];
    return (
      <div>
        <div>
          {this.title("KPI'S a nivel de Influenciadores")}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {CardComponent('Finalizados', End_Descriptions, '#A6CF41', loading)}
            {CardComponent('Errores', Error_Descriptions, '#EB6444', loading)}
            {CardComponent('Procesando', Proc_Descript, 'floralwhite', loading)}
          </div>
        </div>

        <div>
          {this.title("KPI'S a nivel de consulta")}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {CardComponent('Finalizados', End_Descriptions, '#A6CF41', loading)}
            {CardComponent('Errores', Error_Descriptions, '#EB6444', loading)}
            {CardComponent('Procesando', Proc_Descript, 'floralwhite', loading)}
          </div>
        </div>

        <Divider orientation="left">Errores & Bots</Divider>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ background: 'white', padding: '10px', width: '50%' }}>
            <Table
              columns={columns}
              expandedRowRender={record => (
                <p style={{ margin: 0 }}>{record.description}</p>
              )}
              dataSource={data}
            />
          </div>

          <Divider type="vertical" />

          <div style={{ background: 'white', padding: '10px', width: '50%' }}>
            <Table
              columns={columns}
              expandedRowRender={record => (
                <p style={{ margin: 0 }}>{record.description}</p>
              )}
              dataSource={data}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // trae lo de redux de reducers y permite usarlo
  return { Post: state.FetchPost };
};

const mapDispatchToPropsAction = dispatch => ({
  /// acá unicamente es donde uso mi importacion del action para despachar una accion
  FetchPostError: value => dispatch(task_post_error(value)),
  FetchPostEnd: value => dispatch(task_post_end(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(Post);
