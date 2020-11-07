import './App.css';
import React from "react";
import axios from 'axios'
import Header from "./Header";
import QRCode from 'qrcode.react'
import ReactLoading from 'react-loading';


class AppEth2New extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      walletAddress: '',
      isShowQrCode: false,
      ethAddress: '',
      loading: false
    }
  }

  showLoading() {
    this.setState({
      loading: true
    })
  }

  hideLoading() {
    this.setState({
      loading: false
    })
  }

  getEthReceiptAddress() {
    let address = this.state.walletAddress;
    console.log(process.env.END_POINT)
    let url = `https://rpc1.newchain.newtonproject.org/newbridge/account?newchain_recipient_address=${address}&direction=eth2new`
    this.showLoading()
    axios({
      method: 'get',
      url: url,
    }).then((response) => {
        if(response.status === 200) {
        this.setState({
          ethAddress: response.data.ethereum_deposit_address,
          isShowQrCode: true
        });
      }
    }).catch((error) => {
      alert(error);
    }).finally(() =>{
      this.hideLoading()
    })
  }

  handleInputChange(e) {
    this.setState(
      {
        walletAddress: e.target.value
      }
    )
  }

  render() {
    return(
      <div className="container">
        <div className="Col">
          <Header title="Eth2New"/>
          <div className="Col-margin">
            <p>1. 将 Ethereum 上的资产(ETH,NEW,USDT) 转到 NewChain 上;</p>
            <p>2. 在下面的输入框中输入 NewChain 的收币地址</p>
            <p>3. 点击确认，获取在 Ethereum 上的收币地址</p>
            <p>4. 将 Ethereum 上的资产打到二维码中的收币地址</p>
            <p>5. 检查自己的以太坊钱包，查看余额</p>
            <p>6. 确认 NewChain 的接受地址为:{this.state.walletAddress}</p>
            <input className="big-margin big-padding" placeholder="请输入 NEW 接受地址" onChange={this.handleInputChange.bind(this)}/>
            <button className="big-margin big-padding" onClick={this.getEthReceiptAddress.bind(this)}>确认</button>
            <QRCode className="big-margin" value={this.state.ethAddress} style={{ visibility: this.state.isShowQrCode ? 'visible' : 'hidden'}}/>
            <p>请转账到: {this.state.ethAddress}</p>
          </div>
        </div>
        <ReactLoading className="loading" style={{ visibility: this.state.loading ? 'visible': 'hidden'}}/>
      </div>
    )
  }
}


export default AppEth2New;
