import React from 'react';
import AgentDetails from './src/components/AgentDetails/AgentDetails';
import Dashboard from './src/components/Dashboard/Dashboard';
import StepsInfo from './src/components/StepsInfo/StepsInfo';
import Notes from './src/components/Notes/Notes';
import Buttons from './src/components/Buttons/Buttons';
import css from './src/App.css';

class App extends React.Component {
    render() {
        return (
          <div className="container">
              <div className={css.customWrapper}>
                  <div className={css.groupComponents}>
                      <Dashboard />
                      <StepsInfo />
                  </div>
                  <Buttons />
              </div>
          </div>
        );
    }
}

export default App;