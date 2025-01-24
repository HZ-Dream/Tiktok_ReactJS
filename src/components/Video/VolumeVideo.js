import { createContext, useState } from 'react';

export const VideoContext = createContext();

function VolumeVideo({ children }) {
    const [volume, setVolume] = useState(0);
    const [prevVolume, setPreVolume] = useState(0);
    const [isMute, setIsMute] = useState(true);

    const handleAdjustVolume = (e) => {
        const volume = e.target.value;
        if (volume === '0') {
            setVolume(0);
            setIsMute(true);
        } else {
            setPreVolume(volume);
            setVolume(volume);
            setIsMute(false);
        }
    };

    const toggleMuted = () => {
        if (isMute) {
            if (prevVolume === 0) {
                setVolume(0.5);
            } else {
                setVolume(prevVolume);
            }
            setIsMute(false);
        } else {
            setPreVolume(volume);
            setVolume(0);
            setIsMute(true);
        }
    };

    const value = { volume, isMute, handleAdjustVolume, toggleMuted };

    return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
}

export default VolumeVideo;
