import { useNavigate } from 'react-router';
import Header from 'lib/molecules/Header';

interface IPageTemplate {
  title: string;
  author: React.ReactNode;
}

const PageTemplate: React.FC<React.PropsWithChildren<IPageTemplate>> = ({
  title,
  author,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        title={title}
        author={author}
        onLogoClick={() => navigate('/', { state: { from: 'logo' } })}
        logoAriaLabel="Go to main page"
      />

      <main className="px-8 py-4">{children}</main>
    </>
  );
};

export default PageTemplate;
