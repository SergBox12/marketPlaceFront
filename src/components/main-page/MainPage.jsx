import styles from './MainPage.module.scss';
import User from '../user/User';
import defaultAvatar from '../../assets/img/user-avatar-default.png';
import starPicture from '../../assets/img/star.jpg';

function MainPage() {

    return (
       <div className={styles.mainPage}>
        <h4>List of Users:</h4> 
        <User />
       </div>
    );
  }
  
  export default MainPage;