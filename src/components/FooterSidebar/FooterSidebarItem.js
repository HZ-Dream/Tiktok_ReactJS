import classNames from 'classnames/bind';
import styles from './FooterSidebar.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function FooterSidebarItem({ title, data, active, onClick }) {
    return (
        <div className={cx('lists')}>
            <h4 className={cx('list-header', active ? 'active' : '')} onClick={() => onClick(title)}>
                {title}
            </h4>
            {active && (
                <div className={cx('list-item')}>
                    {data.map((item) => (
                        <a className={cx('list-item__link')} key={item.title} href={item.link} target="blank">
                            {item.title}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

FooterSidebarItem.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FooterSidebarItem;
