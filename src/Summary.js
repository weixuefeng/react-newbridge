import React from 'react';
import axios from "axios";
import {Table} from 'react-bootstrap'

class Summary extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      pairs: []
    }
  }

  componentDidMount() {
    console.log("get")
    let url = `https://rpc1.newchain.newtonproject.org/newbridge/pairs`
    axios({
      method: 'get',
      url: url,
    }).then((response) => {
      if(response.status === 200) {
          this.setState({
            pairs: response.data.pairs
          }
        )
        console.log(this.state.pairs)
      }
    }).catch((error) => {
      console.log(error)
      alert(error);
    }).finally(()=> {
    })
  }

  render(){
    let pairs = this.state.pairs
    return (
      <div className='Col center'>
        <div className='Col center table-wrapper'>
          <p>从 NewChain 跨链资产到 Ethereum</p>
          <table className='table'>
            <thead>
              <tr>
                <th>NewChain 资产</th>
                <th>Ethereum 资产</th>
                <th>最小充值数额</th>
                <th>手续费费率</th>
                <th>最小手续费数额</th>
              </tr>
            </thead>
            <tbody>
            { pairs.map((obj, idx) => {
                if(obj) {
                  return(
                    <tr key={idx}>
                      <td>{obj['newchain_token'].symbol}</td>
                      <td>{obj['ethereum_token'].symbol}</td>
                      <td>{obj.new2eth_min_deposit_amount}</td>
                      <td>{obj.new2eth_fee_percent}</td>
                      <td>{obj.new2eth_fee_min_amount}</td>
                    </tr>
                  )
                } else {
                  return (
                    <div>
                    </div>
                  )
                }
              })
            }
            </tbody>
          </table>
        </div>

        <div className='Col center table-wrapper'>
          <p>从 Ethereum 跨链资产到 NewChain</p>
          <table className='table'>
            <thead>
            <tr>
              <th>Ethereum 资产</th>
              <th>NewChain 资产</th>
              <th>最小充值数额</th>
              <th>手续费费率</th>
              <th>最小手续费数额</th>
            </tr>
            </thead>
            <tbody>
            { pairs.map((obj, idx) => {
              if(obj) {
                return(
                  <tr key={idx}>
                    <td>{obj['ethereum_token'].symbol}</td>
                    <td>{obj['newchain_token'].symbol}</td>
                    <td>{obj.eth2new_min_deposit_amount}</td>
                    <td>{obj.eth2new_fee_percent}</td>
                    <td>{obj.eth2new_fee_min_amount}</td>
                  </tr>
                )
              } else {
                return (
                  <div>
                  </div>
                )
              }
            })
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Summary