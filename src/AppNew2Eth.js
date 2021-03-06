import './App.css';
import React from "react";
import QRCode from 'qrcode.react'
import Header from "./Header";
import ReactLoading from 'react-loading';
import ReactClipboard from 'react-clipboardjs-copy'
import Api from "./api/api";

class AppNew2Eth extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      address: '',
      isShowQrCode: false,
      newAddress: '',
      loading: false
    }
  }

  async getNewReceiptAddress() {
    this.showLoading()
    let address = this.state.address
    Api.getInstance().getNewReChargeAddress(address)
    .then((response) => {
        this.setState({
          newAddress: response.newchain_deposit_address,
          isShowQrCode: true
        });
      }).catch(reason => {
        alert(reason)
    }).finally(() => {
      this.hideLoading()
    })
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


  handleInputChange(e) {
    this.setState(
      {
        address: e.target.value
      }
    )
  }

  render() {
    return(
      <div className="container">
        <div className="Col">
        <Header title="New2Eth"/>
          <div className="Col-margin">
            <p>1. 将 NewChain 上的资产(ETH,NEW,USDT) 转到 Ethereum 上;</p>
            <p>2. 在下面的输入框中输入以太坊的收币地址</p>
            <p>3. 点击确认，获取在 NewChain 上的收币地址</p>
            <p>4. 将 NewChain 上的资产打到 NewChain 的收币地址</p>
            <p>5. 检查自己的以太坊钱包，查看余额，以太坊的接受地址为:{this.state.address}</p>
            <input className="big-margin big-padding" placeholder="请输入ETH接受地址" onChange={this.handleInputChange.bind(this)}/>
              <button className="big-margin big-padding" onClick={this.getNewReceiptAddress.bind(this)}>确认</button>
              <QRCode className="big-margin" value={this.state.newAddress} style={{ visibility: this.state.isShowQrCode ? 'visible' : 'hidden'}}/>
              <p>请转账到: {this.state.newAddress}</p>
            <ReactClipboard
              text={this.state.newAddress}
              onSuccess={(e)=> alert("复制成功")}
              onError={(e) => alert(e)}
            >
              <button>Copy</button>
            </ReactClipboard>
          </div>
        </div>
        <ReactLoading className="loading" style={{ visibility: this.state.loading ? 'visible': 'hidden'}}/>
      </div>
    )
  }
}


export default AppNew2Eth;
