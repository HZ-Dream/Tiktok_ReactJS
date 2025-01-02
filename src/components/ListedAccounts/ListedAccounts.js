import classNames from 'classnames/bind';
import styles from './ListedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function ListedAccounts({ label, preview = true }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem preview={preview} />
            <AccountItem preview={preview} />
            <AccountItem preview={preview} />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

ListedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    preview: PropTypes.bool,
};

export default ListedAccounts;
