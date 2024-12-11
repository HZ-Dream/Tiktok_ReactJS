import { forwardRef, useImperativeHandle, useRef } from 'react'
import Karina from './videos/karina.mp4'

function Video(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <video
        ref={videoRef}
        src={Karina} width={100}></video>
    )
}

export default forwardRef(Video)