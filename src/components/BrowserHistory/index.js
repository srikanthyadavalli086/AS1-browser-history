import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class BrowserHistory extends Component {
  state = {
    historyList: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  //   onGo = () => {
  //     const {historyList} = this.state
  //     console.log(historyList)
  //   }

  render() {
    const {historyList} = this.state
    console.log(historyList)
    return (
      <div className="bg-container">
        <div className="top-section">
          <p className="history">HISTORY</p>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="image"
            />
            <input type="search" className="input" />
          </div>
        </div>

        <ul className="bottom-section">
          {historyList.map(eachHistory => (
            <HistoryItem
              historyDetails={this.eachHistory}
              key={eachHistory.id}
            />
          ))}
        </ul>
        <button type="button" onClick={this.onGo}>
          Go
        </button>
      </div>
    )
  }
}
export default BrowserHistory
