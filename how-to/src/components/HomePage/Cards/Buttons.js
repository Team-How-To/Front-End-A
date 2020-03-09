import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guide: null
    };
  }

  componentDidMount() {
    this.fetchGuide(this.props.state.id);
  }

  fetchGuide = id => {
    const myPromise = axiosWithAuth().get(`/api/howto/${id}`);
    myPromise
      .then(response => {
        this.setState({ guide: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteHandler = e => {
    e.preventDefault();
    this.props.deleteGuide(this.state.guide[0].id);
  };
  render() {
    return (
      <>
        <button onClick={this.deleteHandler}>Delete</button>
      </>
    );
  }
}

export default Buttons;
