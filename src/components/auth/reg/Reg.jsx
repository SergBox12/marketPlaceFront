import styles from './Reg.module.scss';
import AuthForm from '../../utils-components/auth-form/AuthForm';

function Reg() {

    const name = 'Sign-up';
    const showAdmin = true;

    return (
       <div className=''>
        <AuthForm name = {name} admin = {showAdmin}/>
       </div>
    );
  }
  
  export default Reg;