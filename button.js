'use strict';

export default class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button
        onClick={() => this.setState({ liked: true })}
        className="bg-green-700 px-5 py-2 text-white rounded-sm m-2 hover:bg-green-800 duration-150 ease-linear"
      >
        Like
      </button>
    );
  }
}
