import LogoButton from '../../atoms/LogoButton';

interface IHeader {
  title: string;
  author: React.ReactNode;
  logoAriaLabel: string;
  onLogoClick: () => void;
}

const Header: React.FC<IHeader> = ({ title, author, onLogoClick, logoAriaLabel }) => {
  return (
    <header className="flex ai-center jc-sb bg--muted pa-1">
      <div className="flex ai-center gap-3">
        <LogoButton ariaLabel={logoAriaLabel} onClick={onLogoClick} />

        <h1 className="text--md text--muted">{title}</h1>
      </div>

      <h2 className="text--md text--muted pr-7">{author}</h2>
    </header>
  );
};

export default Header;
