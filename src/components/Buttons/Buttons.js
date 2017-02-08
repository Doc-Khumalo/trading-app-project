import React, { Component } from 'react';
import css from './Buttons.css';

class Buttons extends Component {
    render() {
        return (
          <div className={css.buttonGroup}>
              <button className={css.acceptButton}>ACCEPT</button>
              <button className={css.transferButton}>TRANSFER</button>
              <button className={css.declineButton}>DECLINE</button>
          </div>
        );
    }
}

export default Buttons;