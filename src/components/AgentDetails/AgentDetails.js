import React, { Component } from 'react';
import trade from './../../data/trade.json';
import css from './AgentDetails.css';

class AgentDetails extends Component {
    render() {
        return (
              <div className="col-md-4">
                  <p className={css.subHeader}>Active Trade</p>
                  <p>{trade.id}</p>
                  <p>Buy: { trade.buy.amount }{ trade.buy.currency } </p>
                  <p>Sell: { trade.sell.amount }{ trade.sell.currency } </p>
                  <p>Margin: { trade.margin}% </p>
                  <p>Dealer: </p>
                  <p>{ trade.dealer }</p>
              </div>
        );
    }
}

export default AgentDetails;