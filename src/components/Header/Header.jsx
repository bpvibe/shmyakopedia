import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                                }
                            >
                                ГЛАВНАЯ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/story"
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                                }
                            >
                                ИСТОРИЯ
                            </NavLink>
                        </li>
                    </ul>
                    <h1 className={styles.logo}>
                        SHMYAK!
                    </h1>
                </nav>
            </div>
        </header>
    );
};

export default Header;