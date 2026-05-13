import { Link } from 'react-router-dom';
import { PageSeo } from '@/components/common/PageSeo/PageSeo';
import styles from './NotFound.module.scss';

export function NotFound() {
  return (
    <>
      <PageSeo
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <main className={styles['not-found']}>
        <div className={styles['not-found__bg']} aria-hidden="true" />
        <div className={styles['not-found__overlay']} aria-hidden="true" />
        <div className={styles['not-found__content']}>
          <p className={styles['not-found__code']} aria-hidden="true">404</p>
          <h1 className={styles['not-found__heading']}>Page not found</h1>
          <p className={styles['not-found__sub']}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className={styles['not-found__cta']}>
            Back to home →
          </Link>
        </div>
      </main>
    </>
  );
}
