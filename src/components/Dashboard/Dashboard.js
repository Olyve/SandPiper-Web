import React, { Component } from 'react';
import { searchSpotify } from '../../Utilities/networking';
import './Dashboard.css';
import TrackList from './Track';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      tracks: []
    }
  }

  onChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSearch() {
    searchSpotify(this.props.user.token, this.state.search)
      .then((json) => {
        console.log(json);

        const results = json['data']['results'];
        this.setState({
          tracks: results['tracks']
        });
      });
  }

  render() {
    return (
      <div className='dashboard'>
        <div className='dashboard-search'>
          <label className='search-label'><span>Search: </span>
            <input type='text' name='search' value={this.state.search} onChange={(e) => this.onChange(e)} />
          </label>
          <button className='search-submit' onClick={() => this.handleSearch()}>Search</button>
        </div>
        <div className='dashboard-searchResults'>
          <TrackList tracks={this.state.tracks}/>
        </div>
      </div>
    );
  }
}

export default Dashboard;