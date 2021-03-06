import { useLocation } from 'react-router-dom';

function NotFoundPage() {
  const location = useLocation();

  return (
    <div id="notFoundPage">
      <code>404</code>
      <p>
        Page not found: <b>{location.pathname}</b>
      </p>
    </div>
  );
}

export default NotFoundPage;
