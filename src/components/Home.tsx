import React from 'react';
import Hello from './Hello';

interface Props {
  name?: string;
}

interface State {
  name: string;
  enthusiasmLevel: number;
}

// class Home extends React.Component<{}, State> {
class Home extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.onClickBtn1 = this.onClickBtn1.bind(this);
    this.onClickBtn2 = this.onClickBtn2.bind(this);

    this.state = {
      name: this.props.name || "David",
      enthusiasmLevel: 0
    }
  }

  onClickBtn1() {
    this.setState({
      name: "123"
      // name: 1+2+3
    });
  }

  onClickBtn2() {
    this.setState(state => ({
      enthusiasmLevel: state.enthusiasmLevel + 1
    }));
  }

  render() {
    let { name, enthusiasmLevel } = this.state;

    return (
      <div className="App" style={{ marginBottom: "20px" }}>
        <Hello name={name} enthusiasmLevel={enthusiasmLevel}></Hello>
        <button name="btn1" onClick={this.onClickBtn1}>Change</button>
        <button name="btn2" onClick={this.onClickBtn2}>Smile++</button>
      </div>
    );
  }
}

export default Home;
