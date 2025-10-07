// src/Footer.js
import React from 'react';
import './Footer.css'; // Import CSS cho footer
import logo from './assets/logo.jpg'; // Import logo

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Cột 1: Logo và mô tả */}
        <div className="footer-column">
          <img src={logo} alt="GreenTap Logo" className="footer-logo" />
          <p>
            Mang thiên nhiên vào ngôi nhà của bạn với công nghệ NFC
            thông minh. Chạm và khám phá thế giới cây xanh.
          </p>
        </div>

        {/* Cột 2: Liên hệ */}
        <div className="footer-column">
          <h3>Liên hệ</h3>
          <p>Hotline: 1900 1000</p>
          <p>Email: info@greentap.com</p>
          <p>Hỗ trợ 24/7</p>
        </div>

        {/* Cột 3: Chính sách */}
        <div className="footer-column">
          <h3>Chính sách</h3>
          <ul>
            <li><a href="#/">Đổi trả miễn phí</a></li>
            <li><a href="#/">Bảo hành cây xanh</a></li>
            <li><a href="#/">Hướng dẫn chăm sóc</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2024 GreenTap. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
}

export default Footer;