import { footerlink } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-3 border-t c-space pt-7 border-black-300">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {footerlink.map(({ id, name, href, img }) => (
          <a
            href={href}
            key={id}
            target="_blank"
          >
            <div className="social-icon">
              <img
                src={img}
                alt={name}
                className="w-1/2 h-1/2"
              />
            </div>
          </a>
        ))}
      </div>

      <p className="text-white-500">© 2024 Akash Sahu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
