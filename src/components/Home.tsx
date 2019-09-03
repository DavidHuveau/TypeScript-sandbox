import React, { Component } from 'react';
import Hello from './Hello';

interface Props {
  name?: string; // name is an optional string
}

interface State {
  name: string;
  enthusiasmLevel: number;
}

// class Home extends React.Component<{}, State> {
class Home extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.changeName = this.changeName.bind(this);
    this.incrementSmiles = this.incrementSmiles.bind(this);

    this.state = {
      name: this.props.name || "David",
      enthusiasmLevel: 0
    }
  }

  changeName() {
    this.setState({
      name: "123"
      // name: 1+2+3
    });
  }

  incrementSmiles() {
    this.setState(state => ({
      enthusiasmLevel: state.enthusiasmLevel + 1
    }));
  }

  render() {
    let { name, enthusiasmLevel } = this.state;

    return (
      <Hello
        name={name}
        enthusiasmLevel={enthusiasmLevel}
        changeName={this.changeName}
        incrementSmiles={this.incrementSmiles}
      />
    );
  }
}

export default Home;
