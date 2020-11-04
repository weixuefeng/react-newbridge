import './App.css';
import React from "react";
import axios from 'axios'
import QRCode from 'qrcode.react'
import Header from "./Header";

class AppNew2Eth extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      address: '',
      isShowQrCode: false,
      newAddress: ''
    }
  }

  async getNewReceiptAddress() {
    var address = this.state.address
    let url = `https://rpc1.newchain.newtonproject.org/newbridge/account?ethereum_recipient_address=${address}&direction=new2eth`
    axios({
      method: 'get',
      url: url,
    }).then((response) => {
      console.log(response.data.newchain_deposit_address);
      if(response.status === 200) {
        this.setState({
          newAddress: response.data.newchain_deposit_address,
          isShowQrCode: true
        });
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  handleInputChange(e) {
    this.setState(
      {
        address: e.target.value
      }
    )
  }

  render() {
    return(
      <div className="Col">
      <Header title="New2Eth"/>
        <div className="Col-margin">
          <p>1. 将 NewChain 上的资产(ETH,NEW,USDT) 转到 Ethereum 上;</p>
          <p>2. 在下面的输入框中输入以太坊的收币地址</p>
          <p>3. 点击确认，获取在 NewChain 上的收币地址</p>
          <p>4. 将 NewChain 上的资产打到 NewChain 的收币地址</p>
          <p>5. 检查自己的以太坊钱包，查看余额，以太坊的接受地址为:{this.state.address}</p>
          <input className="big-margin" placeholder="请输入ETH接受地址" onChange={this.handleInputChange.bind(this)}/>
            <button className="big-margin" onClick={this.getNewReceiptAddress.bind(this)}>确认</button>
            <QRCode className="big-margin" value={this.state.newAddress} style={{ visibility: this.state.isShowQrCode ? 'visible' : 'hidden'}}/>
            <p>请转账到: {this.state.newAddress}</p>
        </div>
      </div>
    )
  }
}


export default AppNew2Eth;
