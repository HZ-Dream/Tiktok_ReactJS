import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import NextPrev from '~/components/Button/NextPrev';
import VideoItem from '~/components/Video';
import videos from '~/assets/videos';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <VideoItem url={videos.karina} />
            <NextPrev />
        </div>
    );
}

export default Home;
