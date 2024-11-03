import styles from './Login.module.scss';
import AuthForm from '../../utils-components/auth-form/AuthForm';

function Login() {

    const name = 'Login';
    const showAdmin = false;

    return (
       <div className=''>
        <AuthForm name = {name} admin = {showAdmin}/>
       </div>
    );
  }
  
  export default Login;