import React from 'react';
import './Footer.css';
import logo from './assets/logo.jpg';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-column">
          <img src={logo} alt="GreenTap Logo" className="footer-logo" />
          <p>
            Mang thiên nhiên vào ngôi nhà của bạn với công nghệ NFC
            thông minh. Chạm và khám phá thế giới cây xanh.
          </p>
        </div>

        <div className="footer-column">
          <h3>Liên hệ</h3>
          <p>Hotline: 0915563800</p>
          <p>Facebook: <a 
              href="https://www.facebook.com/profile.php?id=61581210366800" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              GreenTap
            </a>
          </p>
          <p>Hỗ trợ 24/7</p>
        </div>

        <div className="footer-column">
          <h3>Chính sách</h3>
          <p className="policy-item">Đổi trả miễn phí</p>
          <p className="policy-item">Bảo hành cây xanh</p>
          <p className="policy-item">Hướng dẫn chăm sóc</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2025 GreenTap. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
}

export default Footer;