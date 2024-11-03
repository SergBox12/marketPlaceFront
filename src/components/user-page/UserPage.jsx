import styles from './UserPage.module.scss';
import defaultAvatar from '../../assets/img/user-avatar-default.png';
import starPicture from '../../assets/img/star.jpg';

function UserPage() {

    return (
        <div className={styles.userPageContainer}>
            <div className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                <img className={styles.avatar} src={defaultAvatar} alt="avatar" />
                <div className="col-lg-8">
                    <h6 className="mb-0">Arnold Sh</h6>
                    <small className="text-body-secondary">rate: 5<img className={styles.star} src={starPicture} alt='star-picture'/></small>
                </div>
            </div>
            <form className={styles.feedbackForm} action="post">
                <textarea name="message" id="message"></textarea>
                <label htmlFor="message">Please write a feedback</label>
                <button type="submit" className="btn btn-dark" id='feedbackBtn'>Ok</button>
            </form>
            <ul className={styles.feedbackList}>
                <li className={styles.feedback}>
                    <h6>Bob</h6>
                    <small>rate: 5</small>
                    <p>feedback: Very nice person</p>
                </li>
            </ul>
        </div>
        
    );
  }
  
  export default UserPage;