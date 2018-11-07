import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Divider } from 'antd';
import {
  _GetView,
  _GetEnterpriseEvaluation,
} from '../../../config/redux/actions/fetch';
import CardComponent from '../../../componets/card';
import { columns } from '../../../JSON';
import ReactHtmlParser from 'react-html-parser';

class Informe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      View: props.Fetch.getSuccessView,
      Ev: props.Fetch.getSuccessEv,
      dataTable: [],
      loading: props.Fetch.isFetching,
      Proc_Descript: ReactHtmlParser('<b>NO PROCESA</b>'),
      Error_Descriptions: ReactHtmlParser('Cantidad total: <b>a</b>'),
      End_Descriptions: ReactHtmlParser('Cantidad total: <b>a</b>'),
    };
  }

  async componentDidMount() {
    await this.props.FetchView({});
    await this.props.FetchEv({});
    await this.CreateTableEv(this.state.Ev, this.state.View);
  }

  componentWillUnmount() {
    console.log('bye');
  }

  componentWillReceiveProps(prevProps) {
    this.setState({ loading: prevProps.Fetch.isFetching });
  }

  title = _title => {
    return (
      <div style={{ display: 'flex', padding: '0 0 0 30px' }}>
        <h2>{_title}</h2>
      </div>
    );
  };

  CreateTableEv(_array, _array1) {
    let obj = _array.map((e, i) => {
      let ob = {
        key: i,
        Enterprise_Name: e.Enterprise_Name,
        Contact_Name: e.Contact_Name,
        Mail: e.Mail,
        Expert: e.Expert,
        Surveyed: [],
      };

      // _array1.forEach(
      //   (element, index) =>
      //     Object.keys(element) === e.Enterprise_Name &&
      //     ob.Surveyed.push(element)
      // );

      return ob;
    });

    console.log(obj);

    this.setState({
      dataTable: obj,
    });
  }

  render() {
    const {
      Error_Descriptions,
      End_Descriptions,
      Proc_Descript,
      loading,
      dataTable,
    } = this.state;

    return (
      <div>
        <div>
          {this.title("KPI'S")}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {CardComponent(
              'Empresas inscritas',
              End_Descriptions,
              '#A6CF41',
              loading
            )}
            {CardComponent(
              'Empresas sin contestar',
              Error_Descriptions,
              '#EB6444',
              loading
            )}
            {CardComponent(
              'Empresas contestadas',
              Proc_Descript,
              'floralwhite',
              loading
            )}
          </div>
        </div>

        <Divider orientation="left">Empresas Inscritas & Encuestados</Divider>

        <div style={{ background: 'white', padding: '10px' }}>
          <Table loading={loading} columns={columns} dataSource={dataTable} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // trae lo de redux de reducers y permite usarlo
  return { Fetch: state.Fetch };
};

const mapDispatchToPropsAction = dispatch => ({
  /// acá unicamente es donde uso mi importacion del action para despachar una accion
  FetchView: value => dispatch(_GetView(value)),
  FetchEv: value => dispatch(_GetEnterpriseEvaluation(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(Informe);
