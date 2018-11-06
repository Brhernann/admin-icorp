import React, { Component } from 'react';
import { connect } from 'react-redux';
import { task_post_error } from '../../../config/redux/actions/fetch';

class Audience extends Component {
  componentDidMount() {
    this.props.Fetch({ key: 'get-followers', state: 'end' });
    console.log(this.props.FetchAudience);
  }

  render() {
    return (
      <div>
        <h2>Hola</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // trae lo de redux y permite usarlo
  return { FetchAudience: state.Fetch };
};

const mapDispatchToPropsAction = dispatch => ({
  /// acá unicamente es donde uso mi importacion del action para despachar una accion
  Fetch: value => dispatch(task_post_error(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToPropsAction
)(Audience);
