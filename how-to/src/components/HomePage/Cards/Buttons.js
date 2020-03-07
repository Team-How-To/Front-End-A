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
        console.log("fetch: ", response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  addLikes = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount
    });
  };

  addUpVote = () => {
    let newCount = Number(this.state.up_vote) + 1;

    this.setState({
      up_vote: newCount
    });
  };

  addDownVote = () => {
    let newCount = Number(this.state.down_vote) + 1;

    this.setState({
      down_vote: newCount
    });
  };

  deleteHandler = e => {
    e.preventDefault();
    this.props.deleteGuide(this.state.guide[0].id);
    console.log("DeleteHandler / Guide ID: ", this.state.guide[0].id);
  };
  render() {
    return (
      <>
        <button onClick={this.addLikes} type="button">
          likes: {this.state.likes}
        </button>

        <button onClick={this.addUpVote} type="button">
          {this.state.up_vote} +
        </button>

        <button onClick={this.addDownVote} type="button">
          {this.state.down_vote} -
        </button>

        <Link to="/edit_card">
          <button type="button">Edit</button>
        </Link>

        <button onClick={this.deleteHandler}>Delete</button>
      </>
    );
  }

  // return (
  // <>
  //     <section>
  //         <div>
  //             <span>{props.state.likes}</span>
  //             <button>Like</button>
  //         </div>
  //         <div>
  //             <span>{props.state.up_vote}</span>
  //             <button>+</button>
  //         </div>
  //         <div>
  //             <span>{props.state.down_vote}</span>
  //             <button>-</button>
  //         </div>
  //     </section>
  // </>
  // );
}

export default Buttons;
