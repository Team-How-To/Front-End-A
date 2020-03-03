import React from 'react';

class Buttons extends React.Component {

    state = this.props.state;
    

    addLikes = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };

    addUpVote = () => {
        let newCount = this.state.up_vote + 1;
        this.setState({
            up_vote: newCount
        });
    };

    addDownVote = () => {
        let newCount = this.state.down_vote + 1;
        this.setState({
            down_vote: newCount
        });
    };


    render() {

        return (
            <>
            {console.log('state: ',this.state.state)}
                <button 
                    onClick={this.addLikes} 
                    type='button'>
                        likes: {this.state.likes}
                </button>

                <button 
                    onClick={this.addUpVote} 
                    type='button'>
                        {this.state.up_vote} +
                </button>

                <button 
                    onClick={this.addDownVote} 
                    type='button'>
                        {this.state.down_vote} -
                </button>

                <button>
                    Edit
                </button>

                <button>
                    Delete
                </button>
            </>
        )
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
