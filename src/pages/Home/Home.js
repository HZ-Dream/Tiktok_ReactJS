import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import * as getListVideoService from '~/services/getVideoService';
import styles from './Home.module.scss';
import NextPrev from '~/components/Button/NextPrev';
import VideoItem from '~/components/Video';
import videos from '~/assets/videos';

const cx = classNames.bind(styles);

function Home() {
    const [videoData, setVideoData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getListVideoService.getListVideo('for-you', page);
            setVideoData((prev) => [...prev, ...result]);
        };

        fetchApi();
    }, [page]);

    return (
        <div className={cx('wrapper')}>
            {videoData.map((item, index) => (
                <VideoItem key={index} url={item.file_url} />
            ))}
            {/* {Object.keys(videos).map((key, index) => (
                <VideoItem key={index} url={videos[key]} />
            ))} */}
            <NextPrev />
        </div>
    );
}

export default Home;
