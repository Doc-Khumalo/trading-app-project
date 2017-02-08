import React, { Component } from 'react';
import client from './../../data/client.json';
import css from './StepsInfo.css';
import Notes from './../Notes/Notes';

class StepsInfo extends Component {
    render() {
        return (
          <div className={css.customRow}>
              <div className={css.row}>
                  <div className={css.customBorder}>
                      <div className="col-md-4">
                          <p>Dealer</p>
                            <p>
                                { client.dealer }
                            </p>
                      </div>
                      <div className="col-md-4">
                          <p> Last Login</p>
                          <p>
                              { client.last_login }
                          </p>
                      </div>
                      <div className="col-md-4">
                          <p>Last Call</p>
                          <p>
                              { client.last_call.date } ({ client.last_call.contact })
                          </p>
                      </div>
                  </div>
              </div>
              <Notes />
          </div>
        );
    }
}

export default StepsInfo;