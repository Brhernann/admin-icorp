import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Divider, Button, Modal } from 'antd';
import { _GetInscribed } from '../../../config/redux/actions/fetch';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Informe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Ev: props.Fetch.getSuccessInscribed.reverse(),
      dataTable: [],
      loading: props.Fetch.isFetching,
      visible1: false,
      data: [],
    };
  }

  async componentDidMount() {
    await this.props.FetchInscribed({});
    await this.CreateTableEv(this.state.Ev);
  }

  componentWillReceiveProps(prevProps) {
    this.setState({ loading: prevProps.Fetch.isFetching });
  }

  CreateTableEv(_array) {
    let obj = _array.map((e, i) => {
      let ob = {
        key: i,
        Enterprise_Name: e.Enterprise_Name,
        Contact_Name: e.Contact_Name,
        Mail: e.Mail,
        Expert: e.Expert,
        Surveyed: [],
      };

      return ob;
    });

    this.setState({
      dataTable: obj,
    });
  }

  //Modals evaluation
  showModal1 = e => {
    e.preventDefault();
    let data = JSON.parse(e.target.value);
    console.log(data);
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

  render() {
    const { loading, dataTable } = this.state;

    const columns = [
      {
        title: 'Empresa',
        dataIndex: 'Enterprise_Name',
        key: 'Enterprise_Name',
      },
      { title: 'Contacto', dataIndex: 'Contact_Name', key: 'Contact_Name' },
      { title: 'Email', dataIndex: 'Mail', key: 'Mail' },
      {
        title: 'Experto',
        dataIndex: 'Expert',
        key: 'Expert',
        render: value => (value === 1 ? 'Si' : 'No'),
      },
      {
        title: '',
        dataIndex: '',
        key: 'x',
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
    ];

    return (
      <div>
        <Divider orientation="left">Empresas Inscritas & Encuestados</Divider>
        <div style={{ background: 'white', padding: '10px' }}>
          <Table loading={loading} columns={columns} dataSource={dataTable} />
          <ExcelFile element={<Button>Descargar informe</Button>}>
            <ExcelSheet data={this.state.Ev} name="Employees">
              <ExcelColumn label="Nombre contacto" value="Contact_Name" />
              <ExcelColumn label="Email" value="Mail" />
              <ExcelColumn label="Nombre empresa" value="Enterprise_Name" />
              <ExcelColumn label="Experto" value="Expert" />
            </ExcelSheet>
          </ExcelFile>
        </div>
        <Modal
          title="Respuesta Libre"
          visible={this.state.visible1a}
          onOk={this.handleOk1}
          onCancel={this.handleCancel1}
        >
          <div>
            <div>
              <b>
                ¿Cómo considera usted que su empresa está gestionando los ODS a
                nivel interno?
              </b>
            </div>
            <div>
              <b>
                Indíquenos alguna empresa que opera en Chile, que usted
                considere lider en materia de empatía.
              </b>
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
  FetchInscribed: value => dispatch(_GetInscribed(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(Informe);
