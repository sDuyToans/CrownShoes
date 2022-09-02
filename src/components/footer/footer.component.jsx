
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './footer.styles.scss'
const Footer = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer');
    }
    return(
        <div className="footer-container">
            <div className="footer-logo">
                <CrwnLogo />
                <h4 className='footer-h4'>Crown Shoes Shop</h4>
            </div>
            <div className="contact-container">
                <h5 className='footer-h5'>Contact Us</h5>
                <ul>
                    <li><img alt='facebook' src="https://img.icons8.com/clouds/100/000000/facebook-new.png"/></li>
                    <li><img alt='ins' src="https://img.icons8.com/clouds/100/000000/instagram-new--v3.png"/></li>
                    <li><img alt='twitter' src="https://img.icons8.com/clouds/100/000000/twitter-circled.png"/></li>
                    <li><img alt='pinterest' src="https://img.icons8.com/clouds/100/000000/pinterest.png"/></li>
                </ul>
            </div>
            <div className="footer-copyright">
                <span className="copy-footer">
                    &copy; 
                </span>
                <span> 2022 Crwn Shoes Shop By DuyToan</span>
            </div>
            <div className="contact-me">
                <h3>Want to contact me ? Then click bellow...</h3>
                <ul>
                    <li><span onClick={() => openInNewTab('https://github.com/sDuyToans')}><img src="https://img.icons8.com/clouds/70/000000/github.png" alt='github'/></span></li>
                    <li><span onClick={() => window.open('https://mailto:duytoannguyenledh@gmail.com')}><img src="https://img.icons8.com/clouds/100/000000/gmail.png" alt='gmail'/></span></li>
                    <li><span onClick={() => openInNewTab('https://www.facebook.com/duytoan.nguyenle')}><img alt='facebook' src="https://img.icons8.com/clouds/100/000000/facebook-new.png"/></span></li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;