import { useParams } from 'react-router';
import cn from 'lib/utils/cn';
import s from './ErrorView.module.scss';

const ErrorView: React.FC = () => {
  const { code } = useParams();

  const renderError = () => {
    switch (code) {
      case '404': {
        return <h1 className="text--xl text--destructive">404 not found</h1>;
      }
      default: {
        return (
          <>
            <h1 className="text--xl text--destructive">Whoops! Something went wrong.</h1>
            <p className="text--md">Please try again later.</p>
          </>
        );
      }
    }
  };

  return (
    <div className={cn(s.container, 'flex ai-center jc-center dir-col gap-5')}>{renderError()}</div>
  );
};

export default ErrorView;
