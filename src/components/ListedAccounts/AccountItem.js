import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './ListedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ preview }) {
    const renderPreview = (props) => {
        if (!preview) {
            return;
        } else {
            return (
                <div tabIndex="-1" {...props}>
                    <PopperWrapper>
                        <AccountPreview />
                    </PopperWrapper>
                </div>
            );
        }
    };

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[20, 0]}
                render={renderPreview}
                placement="bottom"
                appendTo={document.body}
            >
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
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    preview: PropTypes.bool.isRequired,
};

export default AccountItem;