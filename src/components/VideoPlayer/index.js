import './index.css'
import ReactPlyer from 'react-player'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlyer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" controls />
    </div>
  </div>
)

export default VideoPlayer
