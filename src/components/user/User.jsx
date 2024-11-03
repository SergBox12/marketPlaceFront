import styles from './User.module.scss';
import defaultAvatar from '../../assets/img/user-avatar-default.png';
import starPicture from '../../assets/img/star.jpg';

function User() {

    return (
        <ul className="list-unstyled">
            <li>
              <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                <img className={styles.avatar} src={defaultAvatar} alt="avatar" />
                <div className="col-lg-8">
                  <h6 className="mb-0">Arnold Sh</h6>
                  <small className="text-body-secondary">What do You think about this user. Please write a feedback</small><br/>
                  <small className="text-body-secondary">rate: 5<img className={styles.star} src={starPicture} alt='star-picture'/></small>
                </div>
              </a>
            </li>
          </ul>
    );
  }
  
  export default User;