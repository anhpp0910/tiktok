import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://s2.coinmarketcap.com/static/img/coins/200x200/25378.png"
                alt="thien"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>ThienNT</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>thiennt_0910</span>
            </div>
        </div>
    );
}
