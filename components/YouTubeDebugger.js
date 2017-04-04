import React from 'react'

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super();
    this.state={
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }//end initial states
  }

  handleClickBitrate(){
    this.setState({
      settings: Object.assign({}, this.state.settings,{
        bitrate: 12,
      })
    })
  }

  handleClickResolution(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: {
        resolution: '720p',
        }

      })
    })
  }

  render(){
    return(
      <div>
      <button className='bitrate' onClick={this.handleClickBitrate.bind(this)}>change bitrate</button>
      <button className='resolution' onClick={this.handleClickResolution.bind(this)}>change resolution</button>
      </div>
    )
  }
}
