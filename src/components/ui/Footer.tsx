import './Footer.css';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__inner wrap">
        <div className="footer__logo" onClick={handleScrollTop}>
          {/* <Logo width="110px" /> */}
        </div>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} LUXION. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
