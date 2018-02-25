import React from 'react';

import web3 from 'src/web3';
import KryptomonKore from 'src/KryptomonKore';

class TestBed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kryptoGod: '',
      userAccount: '',
      completeFreeze: true,
      ownedEggs: 0,
      ownedKryptomon: 0,
    };

    this.refreshState = this.refreshState.bind(this);
  }

  componentDidMount() {
    this.refreshState();
  }

  async refreshState() {
    const kryptoGod = await KryptomonKore.methods.kryptoGodAddress().call();
    const completeFreeze = await KryptomonKore.methods.completeFreeze().call();
    const accounts = await web3.eth.getAccounts();
    window.account = accounts[0];
    const ownedEggs = await KryptomonKore.methods.eggBalanceOf(window.account).call();
    const ownedKryptomon = await KryptomonKore.methods.balanceOf(window.account).call();
    this.setState({
      kryptoGod,
      userAccount: window.account,
      completeFreeze,
      ownedEggs,
      ownedKryptomon,
    });
  }

  render() {
    const buyGen0Egg = () => {
      // Current genZeroEggPrice = 0.01 ETH
      KryptomonKore.methods.buyGenZeroEggs(1).send({
        from: this.state.userAccount,
        value: web3.utils.toWei('0.01'),
      });
    };

    return (
      <div>
        <h2>Welcome to the Test Bed for Kryptomon!</h2>
        <br />
        <div>The current KryptoGod is: {this.state.kryptoGod}</div>
        <br />
        <div>You are browsing from: {this.state.userAccount}</div>
        <br />
        <h3>
          Current Complete Freeze? {this.state.completeFreeze ? 'True' : 'False'}
        </h3>
        <br />
        <div>
          Here we can try buying some eggs:
          <br />
          <button onClick={buyGen0Egg}>Buy 1 Gen0 Egg</button>
          <br />
        </div>
        <div>You currently own: {this.state.ownedEggs} eggs and {this.state.ownedKryptomon} Kryptomon!</div>
        <br />
        <button onClick={this.refreshState}>Refresh State</button>
        <br />
      </div>
    );
  }
}

export default TestBed;