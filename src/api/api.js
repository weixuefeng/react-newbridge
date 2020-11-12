/**
 * @author weixuefeng@lubangame.com
 * @version $
 * @time: 2020/11/12--10:45 上午
 * @description
 * @copyright (c) 2020 Newton Foundation. All rights reserved.
 */

import axios from 'axios';

const baseUrl = "https://rpc1.newchain.newtonproject.org/";
const supportPairs = "newbridge/pairs";
const account = "newbridge/account"

const urlSupportPairs = baseUrl + supportPairs;
const urlAccount = baseUrl + account;

axios.create({
  timeout: 15000 ,// 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

function _get(url) {
  return new Promise(function (resolve, reject) {
    axios.get(url)
      .then((response) => {
        if(response.status === 200) {
          resolve(response.data)
        } else {
          reject(response.statusText)
        }
      }).catch((error) => {
        reject(error)
    })
  })
}

let instance = null

class Api {

  static getInstance() {
    if(instance === undefined || instance === null) {
      instance = new Api();
      console.log("new api -")
    } else {
      console.log("old api-->")
    }
    return instance;
  }

  getSupportPairs() {
    return _get(urlSupportPairs)
  }

// transfer newChain to ethereum. user provide eth address, and give user new address.
  getNewReChargeAddress(ethAddress) {
    let url = `${urlAccount}?ethereum_recipient_address=${ethAddress}&direction=new2eth`
    return _get(url)
  }

// transfer ethereum to newChain. user provide new address, and give user eth address.
  getEthReChargeAddress(newAddress) {
    let url = `${urlAccount}?newchain_recipient_address=${newAddress}&direction=eth2new`
    return _get(url)
  }
}
export default Api