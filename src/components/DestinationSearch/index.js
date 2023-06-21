import {Component} from 'react'

import './index.css'

class DestinationSearch extends Component {
  render() {
    const {destinationsList, key} = this.props
    const {name, imgUrl} = destinationsList

    return (
      <li>
        <div className="tain-2">
          <img src={imgUrl} alt={name} className="images" />
          <p>{name}</p>
        </div>
      </li>
    )
  }
}
export default DestinationSearch
