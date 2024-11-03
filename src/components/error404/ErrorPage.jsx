import styles from './ErrorPage.module.scss';


function ErrorPage() {

  const error = 'Error 404';
  const title = 'Not found';

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorPageContainer}>
        <p className={styles.errorPageText}>{title}</p>
        <h1 className={styles.errorPageTitle}>{error}</h1>
      </div>
    </div>
  );
}

export default ErrorPage;