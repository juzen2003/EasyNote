import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import LogInFormContainer from '../session_form/login_container'

class Main extends React.Component {
  render() {
    const splashMessages = "";
    const copyrightMessages = "Copyright";
    return (
      <div className="main-page">
        <div className="nav-bar-area">
          <NavBarContainer />
        </div>
        <div className="main-body-area">
          <section className="section-left">
            <LogInFormContainer />
          </section>
          <section className="section-right">
            <h3>Keep Track of Your Idea</h3>
          </section>
        </div>
        <div className="footer-area">
          <footer>{copyrightMessages}</footer>
        </div>
      </div>
    )
  }
}

export default Main;
