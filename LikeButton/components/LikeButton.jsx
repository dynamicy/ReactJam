class LikeButton extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false,
            hated: false,
            count: 0
        };
//        this.handleLikedClick = this.handleLikedClick.bind(this);
//        this.handleHatedClick = this.handleHatedClick.bind(this);
    }
    
//    handleLikedClick = () => this.setState({liked: !this.state.liked});

//    handleHatedClick = () => this.setState({hated: !this.state.hated});

    clickCounter = () => this.setState({count: this.state.count + 1});

    render() {
        var textLiked = this.state.liked ? 'like' : 'haven\'t liked';
        var textHated = this.state.hated ? 'hate' : 'haven\'t hated';
        return (
                <ul>
                    <li>
                        <p onClick={this.clickCounter}>
                        You Click {this.state.count} times.
                    </li>
                </ul>
        );
    }
}

ReactDOM.render(
    <LikeButton />,
        document.getElementById('app')
);
