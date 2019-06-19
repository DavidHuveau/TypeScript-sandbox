import React from 'react';
import Hello from './Hello';

interface Props {
  name?: string;
}

interface State {
  name: string;
}

// class Home extends React.Component<{}, State> {
class Home extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.onClickBtn1 = this.onClickBtn1.bind(this);
    this.state = {
      name: this.props.name || "David"
    }
  }

  onClickBtn1() {

  }

  render() {
    let myName: string = this.state.name;
    // myName = 123;

    return (
      <div className="App" style={{marginBottom: "20px"}}>
        <Hello name={myName}></Hello>
        <button name="btn1" onClick={this.onClickBtn1}>Change</button>
      </div>
    );
  }
}

export default Home;
