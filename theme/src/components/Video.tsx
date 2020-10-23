import * as React from 'react'

export const Video:  React.FC<any> = ({ videoSrcURL, videoTitle, ...props }) => {
  return (
    <div className="video">
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )
}
export default Video
