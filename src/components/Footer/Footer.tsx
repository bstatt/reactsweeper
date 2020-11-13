import React from 'react';
import './Footer.scss';

interface IProps {}

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            ReactSweeper&trade; &copy; 2020 B-Nasty, Inc.
        </footer>
    );
};
export default Footer;