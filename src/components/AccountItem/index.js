import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/448020594_986596983474571_4865932017320470926_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Vv3p2GVFb_YQ7kNvgFruFxW&_nc_zt=23&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=AZvG_rYyS1DsNToThl-ECGi&oh=00_AYCX_XLMiHEUID8uhUaR8_Z4jD_LjDLF5bCmdMY7A0uLew&oe=67686079"
                alt="SGP"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Saigon Phantom</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>saigonphantom.aov</span>
            </div>
        </div>
    );
}

export default AccountItem;
