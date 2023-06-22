import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <ul>
            <li>
                <Link href='/'>главная</Link>
            </li>
            <li>
                <Link href='/profile'>профиль</Link>
            </li>
            <li>
                <Link href='/channel/1'>канал</Link>
            </li>
            <li>
                <Link href='/video/1'>видео</Link>
            </li>
        </ul>
    );
}

export default Sidebar;