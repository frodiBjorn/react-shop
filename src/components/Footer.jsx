const Footer = () => {
  return (
    <footer className="page-footer orange darken-1">
      <div className="container"></div>
      <div className="footer-copyright orange darken-1">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/frodiBjorn/react-shop"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
