import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FooterSidebar.module.scss';
import images from '~/assets/images';
import FooterSidebarItem from './FooterSidebarItem';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Company',
        data: [
            {
                title: 'About',
                link: 'https://www.tiktok.com/about?lang=en',
            },
            {
                title: 'Newsroom',
                link: 'https://newsroom.tiktok.com/en-us/?lang=en',
            },
            {
                title: 'Contact',
                link: 'https://www.tiktok.com/about/contact?lang=en',
            },
            {
                title: 'Careers',
                link: 'https://lifeattiktok.com/',
            },
        ],
    },
    {
        title: 'Program',
        data: [
            {
                title: 'TikTok for Good',
                link: 'https://www.tiktok.com/forgood',
            },
            {
                title: 'Advertise',
                link: 'https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web',
            },
            {
                title: 'TikTok LIVE Creator Networks',
                link: 'https://www.tiktok.com/live/creator-networks/en?enter_from=tiktok_official',
            },
            {
                title: 'Developers',
                link: 'https://developers.tiktok.com/?refer=tiktok_web',
            },
            {
                title: 'Transparency',
                link: 'https://www.tiktok.com/transparency',
            },
            {
                title: 'TikTok Rewards',
                link: 'https://www.tiktok.com/tiktok-rewards/en',
            },
            {
                title: 'TikTok Embeds',
                link: 'https://www.tiktok.com/embed',
            },
            {
                title: 'SoundOn Music Distribution',
                link: 'https://www.soundon.global/',
            },
            {
                title: 'TikTok Live',
                link: 'https://www.tiktok.com/live',
            },
            {
                title: 'TikTok Shop',
                link: 'https://www.tiktok.com/shop',
            },
            {
                title: 'Download TikTok',
                link: 'https://www.tiktok.com/download/en',
            },
        ],
    },
    {
        title: 'Terms & Policies',
        data: [
            {
                title: 'Help',
                link: 'https://support.tiktok.com/en',
            },
            {
                title: 'Safety',
                link: 'https://www.tiktok.com/safety?lang=en',
            },
            {
                title: 'Terms',
                link: 'https://www.tiktok.com/legal/terms-of-service?lang=en',
            },
            {
                title: 'Privacy Policy',
                link: 'https://www.tiktok.com/legal/privacy-policy-row?lang=en',
            },
            {
                title: 'Accessibility',
                link: 'https://www.tiktok.com/accessibility/en',
            },
            {
                title: 'Privacy Center',
                link: 'https://www.tiktok.com/privacy/overview/en',
            },
            {
                title: 'Creator Academy',
                link: 'https://www.tiktok.com/creator-academy',
            },
            {
                title: 'Community Guidelines',
                link: 'https://www.tiktok.com/community-guidelines?lang=en',
            },
            {
                title: 'Copyright',
                link: 'https://www.tiktok.com/legal/page/global/copyright-policy/en',
            },
            {
                title: 'Law Enforcement Guidelines',
                link: 'https://www.tiktok.com/legal/law-enforcement?lang=en',
            },
        ],
    },
];

function FooterSidebar() {
    const [activeTitle, setActiveTitle] = useState('');

    const handleActive = (title) => {
        setActiveTitle((prevTitle) => (prevTitle === title ? '' : title));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('create-effect')}>
                <a className={cx('banner')} href="/">
                    <img className={cx('banner-img')} src={images.bannerImage} alt="Banner" />
                    <div className={cx('banner-title')}>
                        <div className={cx('banner-title__info')}>
                            <h4>Create TikTok effects, get a reward</h4>
                        </div>
                    </div>
                </a>
            </div>
            {MENU_ITEMS.map((item) => (
                <FooterSidebarItem
                    key={item.title}
                    title={item.title}
                    data={item.data}
                    active={activeTitle === item.title}
                    onClick={handleActive}
                />
            ))}
            <span className={cx('copyright')}>© 2025 TikTok</span>
        </div>
    );
}

export default FooterSidebar;
