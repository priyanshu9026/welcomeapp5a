// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {isLoggedIn: false}

  buttonText = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    return isLoggedIn ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.renderAuthButton()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <h1 className="mesg">Thank you! Happy Learning</h1>
        <button className="btn" type="button" onClick={this.buttonText}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
