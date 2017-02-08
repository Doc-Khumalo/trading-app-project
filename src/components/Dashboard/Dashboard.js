import React, { Component } from 'react';
import css from './Dashboard.css';
import './Dashboard.css';
import AgentDetails from '../AgentDetails/AgentDetails';
import trade from './../../data/trade.json';
import incomingCall from '../../assets/images/incoming-call.png';
import userLogo from '../../assets/images/image-contact.png';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "id":"007",
            "name":"Super Client Company Ltd.",
            "type":"Corporate",
            "phone":"01721234567",
            "net_position":12121.2,
            "main_contact":{
                "name":"John Show",
                "position":"Head of Marketing of The Wall"
            },
            "dealer":"Jane Doe",
            "last_login":"Nov-19 10:04",
            "last_call":{
                "date":"Nov-10 09:50",
                "contact":"Marry Poppins"
            }
        };
    }
    render() {
        return (
          <div>
              <div className={css.accountInfo}>
                  <p>
                      Corporate Account
                  </p>
              </div>


              <div className={css.customWrapper}>
                      <div className="row">
                          <div className={css.leftContainer}>
                              <div className="col-md-6">
                                  <h1> { this.state.name } </h1>
                              </div>
                          </div>
                          <div className="col-sm-3">
                              <img
                                alt="Incoming call" src={incomingCall}
                                className={css.callImage}
                              />
                          </div>
                      </div>

                  <div className={css.cutomTes}>
                      <p>Active Trade</p>
                      <p>{trade.id}</p>
                      <p>Buy: { trade.buy.amount }{ trade.buy.currency } </p>
                      <p>Sell: { trade.sell.amount }{ trade.sell.currency } </p>
                      <p>Margin: { trade.margin}% </p>
                      <p>Dealer: </p>
                      <p>{ trade.dealer }</p>
                  </div>

                  <div className={css.groupComponents}>
                      <div className="col-md-5">
                          <p> { this.state.phone } </p>
                          <p>
                              <a  href="">SC122323XE</a>
                          </p>
                          <p>
                              NP: ${ this.state.net_position }0
                          </p>
                      </div>
                      <div className="col-md-3">
                          <p>Main Contact
                              <img
                                alt="Incoming call" src={userLogo}
                                className={css.userImage}
                              />
                          </p>
                          <p> { this.state.main_contact.name } </p>
                          <p> { this.state.main_contact.position } </p>
                      </div>

                  </div>
              </div>
          </div>
        );
    }
}

export default Dashboard;