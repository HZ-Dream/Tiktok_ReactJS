import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://mcdn.coolmate.me/image/October2021/meme-cheems-1.png"
                alt="Avatar"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>ngochoaidream</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Ngọc Hoài</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
