import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Divider } from 'antd';
import {
  _GetF2EmpresasView,
} from '../../../config/redux/actions/fetch';
import CardComponent from '../../../componets/card';
import {columns4} from '../../../JSON';
import ReactHtmlParser from 'react-html-parser';

class f2Empresas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      View: props.Fetch.getSuccessView,
      dataTable: [],
      loading: props.Fetch.isFetching,
      Proc_Descript: ReactHtmlParser('<b>NO PROCESA</b>'),
      Error_Descriptions: ReactHtmlParser('Cantidad total: <b>a</b>'),
      End_Descriptions: ReactHtmlParser('Cantidad total: <b>a</b>'),
    };
  }

  async componentDidMount() {
    await this.props.FetchView({});
    await this.CreateTableEv(this.state.View);
    console.log('la vista',this.state.View)
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
      console.log('eeee',e)
      let ob = {
        key: i,
        resultado: e.resultado,
        Empresa_Seleccionada: e.Empresa_seleccionada 
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

        <Divider orientation="left">Encuesta de flujo de f2Empresas</Divider>

        <div style={{ background: 'white', padding: '10px' }}>
          <Table loading={loading} columns={columns4} dataSource={dataTable} scroll={{ x: 300, y: 300 }} />
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
  FetchView: value => dispatch(_GetF2EmpresasView(value)),
  //FetchEv: value => dispatch(_GetEnterpriseEvaluation(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(f2Empresas);
