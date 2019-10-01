import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Divider, Modal, Button } from 'antd';
import { _GetEnterpriseView } from '../../../config/redux/actions/fetch';
import CardComponent from '../../../componets/card';
import ReactHtmlParser from 'react-html-parser';
import Factorsformodal from '../../../componets/factors';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Empresa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      View: props.Fetch.getSuccessEnterprise.reverse(),
      dataTable: [],
      loading: false,
      kpiDescription: (value = 0) =>
        ReactHtmlParser(`Cantidad total: <b>${value}</b>`),
      visible1: false,
      visible2: false,
      data: [],
    };
  }

  async componentDidMount() {
    await this.props.FetchView({});
    await this.CreateTable(this.state.View);
  }

  componentWillReceiveProps(prevProps) {
    this.setState({ loading: prevProps.Fetch.isFetching });
  }

  //Table constructor
  CreateTable(_array) {
    let dataTable = _array.map((e, i) => {
      return {
        key: i,
        Empresa_Seleccionada: e.Empresa_Seleccionada,
        Empresa_Origen: e.Empresa_Origen,
        Mail: e.MAIl,
        Evaluation: [
          e.Answer_1,
          e.Answer_2,
          e.Answer_3,
          e.Answer_4,
          e.Answer_5,
          e.Answer_6,
          e.Answer_7,
          e.Answer_8,
          e.Answer_9,
          e.Answer_10,
          e.Answer_11,
          e.Answer_12,
          e.Answer_13,
          e.Answer_14,
          e.Answer_15,
          e.Answer_16,
        ],
        FreeAnswer: [e.Respuesta_libre_Empatia_Lider, e.Respuesta_libre_ODS],
      };
    });

    this.setState({ dataTable });
  }

  //Modals evaluation
  showModal1 = e => {
    e.preventDefault();
    let data = JSON.parse(e.target.value);
    data = [
      {
        key: data[1],
        F1: data[0] === 8 ? 'N/A' : data[0],
        F2: data[1] === 8 ? 'N/A' : data[1],
        F3: data[2] === 8 ? 'N/A' : data[2],
        F4: data[3] === 8 ? 'N/A' : data[3],
        F5: data[4] === 8 ? 'N/A' : data[4],
        F6: data[5] === 8 ? 'N/A' : data[5],
        F7: data[6] === 8 ? 'N/A' : data[6],
        F8: data[7] === 8 ? 'N/A' : data[7],
        F9: data[8] === 8 ? 'N/A' : data[8],
        F10: data[9] === 8 ? 'N/A' : data[9],
        F11: data[10] === 8 ? 'N/A' : data[10],
        F12: data[11] === 8 ? 'N/A' : data[11],
        F13: data[12] === 8 ? 'N/A' : data[12],
        F14: data[13] === 8 ? 'N/A' : data[13],
        F15: data[14] === 8 ? 'N/A' : data[14],
        F16: data[15] === 8 ? 'N/A' : data[15],
      },
    ];

    this.setState({ visible1: true, data });
  };

  handleOk1 = e => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  };

  handleCancel1 = e => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  };

  //Modals Free responses

  showModal2 = e => {
    e.preventDefault();
    let data = JSON.parse(e.target.value);
    this.setState({ visible2: true, data });
  };

  handleOk2 = e => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };

  handleCancel2 = e => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };

  render() {
    const { kpiDescription, loading, dataTable, data } = this.state;

    let evaluation = [
      { title: 'F1', dataIndex: 'F1', key: '1' },
      { title: 'F2', dataIndex: 'F2', key: '2' },
      { title: 'F3', dataIndex: 'F3', key: '3' },
      { title: 'F4', dataIndex: 'F4', key: '4' },
      { title: 'F5', dataIndex: 'F5', key: '5' },
      { title: 'F6', dataIndex: 'F6', key: '6' },
      { title: 'F7', dataIndex: 'F7', key: '7' },
      { title: 'F8', dataIndex: 'F8', key: '8' },
      { title: 'F9', dataIndex: 'F9', key: '9' },
      { title: 'F10', dataIndex: 'F10', key: '10' },
      { title: 'F11', dataIndex: 'F11', key: '11' },
      { title: 'F12', dataIndex: 'F12', key: '12' },
      { title: 'F13', dataIndex: 'F13', key: '13' },
      { title: 'F14', dataIndex: 'F14', key: '14' },
      { title: 'F15', dataIndex: 'F15', key: '15' },
      { title: 'F16', dataIndex: 'F16', key: '16' },
    ];

    let column = [
      {
        title: 'Empresa seleccionada',
        width: 140,
        dataIndex: 'Empresa_Seleccionada',
        key: 'Empresa_Seleccionada',
      },
      {
        title: 'Empresa Origen',
        width: 100,
        dataIndex: 'Empresa_Origen',
        key: 'Empresa_Origen',
      },
      {
        title: 'Email encuestado',
        width: 140,
        dataIndex: 'Mail',
        key: 'Mail',
      },
      {
        title: 'Evaluación',
        width: 70,
        dataIndex: 'Evaluation',
        key: 'Evaluation',
        render: value => {
          return (
            <Button
              type="link"
              value={JSON.stringify(value)}
              icon="eye"
              onClick={this.showModal1.bind(this)}
            />
          );
        },
      },
      {
        title: 'Respuestas libres',
        width: 100,
        dataIndex: 'FreeAnswer',
        key: 'FreeAnswer',
        render: value => (
          <Button
            type="link"
            value={JSON.stringify(value)}
            icon="eye"
            onClick={this.showModal2.bind(this)}
          />
        ),
      },
    ];

    return (
      <div>
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
            {CardComponent(
              'Empresas evaluadas',
              kpiDescription(dataTable.length),
              '#A6CF41',
              loading
            )}
          </div>
        </div>

        <Divider orientation="left">Informe de encuesta empresa</Divider>

        <div style={{ background: 'white', padding: '10px' }}>
          <Table loading={loading} columns={column} dataSource={dataTable} />
          <ExcelFile element={<Button>Descagar informe</Button>}>
            <ExcelSheet data={this.state.View} name="Employees">
              <ExcelColumn
                label="Empresa seleccionada"
                value="Empresa_Seleccionada"
              />
              <ExcelColumn label="Empresa Origen" value="Empresa_Origen" />
              <ExcelColumn label="Email encuestado" value="MAIl" />
              <ExcelColumn label="F1" value="Answer_1" />
              <ExcelColumn label="F2" value="Answer_2" />
              <ExcelColumn label="F3" value="Answer_3" />
              <ExcelColumn label="F4" value="Answer_4" />
              <ExcelColumn label="F5" value="Answer_5" />
              <ExcelColumn label="F6" value="Answer_6" />
              <ExcelColumn label="F7" value="Answer_7" />
              <ExcelColumn label="F8" value="Answer_8" />
              <ExcelColumn label="F9" value="Answer_9" />
              <ExcelColumn label="F10" value="Answer_10" />
              <ExcelColumn label="F11" value="Answer_11" />
              <ExcelColumn label="F12" value="Answer_12" />
              <ExcelColumn label="F13" value="Answer_13" />
              <ExcelColumn label="F14" value="Answer_14" />
              <ExcelColumn label="F15" value="Answer_15" />
              <ExcelColumn label="F16" value="Answer_16" />
              <ExcelColumn
                label="¿Cómo considera usted que su empresa está gestionando los ODS a nivel interno?"
                value="Respuesta_libre_ODS"
              />
              <ExcelColumn
                label="Indíquenos alguna empresa que opera en Chile, que usted considere lider en materia de empatía."
                value="Respuesta_libre_Empatia_Lider"
              />
            </ExcelSheet>
          </ExcelFile>
        </div>
        <Modal
          title="Evaluación de empresa"
          visible={this.state.visible1}
          onOk={this.handleOk1}
          onCancel={this.handleCancel1}
          width="90%"
        >
          <div>
            <div style={{ margin: '10px' }}>
              <div style={{ marginBottom: '10px' }}>
                <b>
                  La evaluación de empresa corresponde a una escala entre 1 y 7.
                </b>
              </div>
              <Table columns={evaluation} dataSource={data} />
            </div>
            <div>
              <Factorsformodal />
            </div>
          </div>
        </Modal>
        <Modal
          title="Respuesta Libre"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
        >
          <div>
            <div>
              <b>
                ¿Cómo considera usted que su empresa está gestionando los ODS a
                nivel interno?
              </b>
              <p>{data[1]}</p>
            </div>
            <div>
              <b>
                Indíquenos alguna empresa que opera en Chile, que usted
                considere lider en materia de empatía.
              </b>
              <p>{data[0]}</p>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { Fetch: state.Fetch };
};

const mapDispatchToPropsAction = dispatch => ({
  FetchView: value => dispatch(_GetEnterpriseView(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(Empresa);
