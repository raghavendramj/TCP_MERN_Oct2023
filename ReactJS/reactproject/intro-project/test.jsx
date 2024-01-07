class MyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        };
    }
    onCounterClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return <div onClick={this.onCounterClick}>
            {this.state.count}
        </div>;
    }
}

function MyCounterFFC(props) {
    const [count, setCount] = React.useState(0);
    const onCounterClick = () => setCount(count + 1);

    return <div onClick={onCounterClick}>
        {props.count}
    </div>;
}
