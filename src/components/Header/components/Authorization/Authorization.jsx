import React from 'react'
import { Link } from 'react-router-dom';

export const Authorization = () => {
    return (
        <div className={styles.authorize}>
            <Link to="/signIn">
                <div className={styles.authorize__icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z"
                            fill="#C3CAD9" />
                    </svg>
                </div>
            </Link>
            <div className={styles.authorize__links}>
                <Link className={styles.authorize__link} to="/signIn">Sign in</Link>
                <p>or</p>
                <Link className={styles.authorize__link} to="/signUp">Join</Link>
            </div>
        </div>
    )
}
