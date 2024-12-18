import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    const accounts = [
        {
            src: 'https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/448020594_986596983474571_4865932017320470926_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Vv3p2GVFb_YQ7kNvgFruFxW&_nc_zt=23&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=AZvG_rYyS1DsNToThl-ECGi&oh=00_AYCX_XLMiHEUID8uhUaR8_Z4jD_LjDLF5bCmdMY7A0uLew&oe=67686079',
            alt: 'SGP',
            name: 'Saigon Phantom',
            username: 'saigonphantom.aov',
        },
        {
            src: 'https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/465555362_1149806183175882_1783753263658150003_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=gRqKOar0kiEQ7kNvgFCU-C4&_nc_zt=23&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=AyGSHDZ7QR4RTWvFDH8y5Rt&oh=00_AYDCfJjA8on90gN-vQc-4ssf5FE3At8SP4XIbi6Xkpdyzg&oe=67687D51',
            alt: 'MC',
            name: 'Manchester City',
            username: 'mancity.epl',
        },
        {
            src: 'https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/240606037_4940273755999515_7283159501447642674_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=N2ga2vtgseIQ7kNvgFRMnZ2&_nc_zt=24&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=AV1j1TMa0OLWuLisg0esg2B&oh=00_AYDJW5Sk1lROUukTpUavIeTbrEeMzKl7fpIM2g_jIeV9hg&oe=67684C2A',
            alt: 'Ishigami',
            name: 'Nguyễn Quang Thắng',
            username: 'leetcode.flash',
        },
    ];
    return (
        <>
            {accounts.map((account) => (
                <div className={cx('wrapper')}>
                    <img className={cx('avatar')} src={account.src} alt={account.alt} />
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <span>{account.name}</span>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <span className={cx('username')}>{account.username}</span>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AccountItem;
