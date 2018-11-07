import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Divider } from 'antd';
import {
  _GetView,
  /* _GetEnterpriseEvaluation, */
} from '../../../config/redux/actions/fetch';
import CardComponent from '../../../componets/card';
import { columns2 } from '../../../JSON';
import ReactHtmlParser from 'react-html-parser';

class Encuestado extends Component {
  constructor(props) {
    super(props);

    this.state = {
      View: props.Fetch.getSuccessView,
      /* Ev: props.Fetch.getSuccessEv, */
      dataTable: [],
      loading: props.Fetch.isFetching,
      Proc_Descript: ReactHtmlParser('<b>NO PROCESA</b>'),
      Error_Descriptions: ReactHtmlParser('Cantidad total: <b>a</b>'),
      End_Descriptions: ReactHtmlParser('Cantidad total: <b>a</b>'),
    };
  }

  async componentDidMount() {
    await this.props.FetchView({});
   /*  await this.props.FetchEv({}); */
    await this.CreateTableEv(/* this.state.Ev,  */this.state.View);
    console.log(this.state.View)
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
        Name: e.Empresa_seleccionada,
        Mail: e.Email_encuestado,
        Expert: e.Experto,
        Answer: e.Respuesta_libre,
        Answer_1: e.Answer_1,
        Answer_2: e.Answer_2,
        Answer_3: e.Answer_3,
        Answer_4: e.Answer_4,
        Answer_5: e.Answer_5,
        Answer_6: e.Answer_6,
        Answer_7: e.Answer_7,
        Answer_8: e.Answer_8,
        Answer_9: e.Answer_9,
        Answer_10: e.Answer_10,
        Answer_11: e.Answer_11,
        Answer_12: e.Answer_12,
        Answer_13: e.Answer_13,
        Answer_14: e.Answer_14,
        Answer_15: e.Answer_15,
        Answer_16: e.Answer_16,
        Answer_17: e.Answer_17,
        
        
      };
console.log('aa',e)
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

        <Divider orientation="left">Encuestados</Divider>

        <div style={{ background: 'white', padding: '10px' }}>
          <Table loading={loading} columns={columns2} dataSource={dataTable} scroll={{ x: 1500, y: 300 }} />
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
  //FetchEv: value => dispatch(_GetEnterpriseEvaluation(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(Encuestado);
