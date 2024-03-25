import useExternalScripts from '../../hooks/useExternalScripts'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'video-js': any
    }
  }
}

interface VideoProps {
  scriptUrl: string
  playerId: string
  videoId: string
  className?: string
}

const Video = ({ scriptUrl, playerId, videoId, className }: VideoProps) => {
  useExternalScripts(scriptUrl)

  return (
    <div className={`${className}`}>
      <video-js
        data-account="6165065566001"
        data-player={playerId}
        data-embed="default"
        controls=""
        data-video-id={videoId}
        data-playlist-id=""
        data-application-id=""
        class="vjs-fluid"
        loop></video-js>

      <h3 className="reader-only">Video</h3>
    </div>
  )
}

export default Video
