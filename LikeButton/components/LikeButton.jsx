class LikeButton extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false,
            hated: false
        };
        this.handleLikedClick = this.handleLikedClick.bind(this);
        this.handleHatedClick = this.handleHatedClick.bind(this);
    }
    handleLikedClick() {
        this.setState({
            liked: !this.state.liked
        });
    }
    handleHatedClick() {
        this.setState({
            hated: !this.state.hated
        });
    }
    render() {
        var textLiked = this.state.liked ? 'like' : 'haven\'t liked';
        var textHated = this.state.hated ? 'hate' : 'haven\'t hated';
        return (
                <ul>
                    <li>
                        <p onClick={this.handleLikedClick}>
                        You {textLiked} this. Click to toggle.
                        </p>
                    </li>
                    <li>
                        <p onClick={this.handleHatedClick}>
                        You {textHated} this. Click to toggle.
                        </p>
                    </li>
                </ul>
        );
    }
}

ReactDOM.render(
    <LikeButton />,
        document.getElementById('app')
);
