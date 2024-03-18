import React, {Component} from 'react'
import CryptocurrenciesItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoCurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrenciesView = () => {
    const {CryptocurrenciesData} = this.props
    return (
      <div className="container-tracker">
        {this.renderCryptoCurrenciesHeader()}
        <ul>
          {CryptocurrenciesData.map(eachCurrency => (
            <CryptocurrenciesItem
              key={eachCurrency.id}
              CryptocurrencyDetails={eachCurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-currencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptoCurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
