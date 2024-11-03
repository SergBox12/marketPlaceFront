import styles from './AuthForm.module.scss';
import axios from 'axios';


function AuthForm(props) {

    const formFields = {
        name: 'name',
        password: 'password',
        isAdmin: 'isAdmin'
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const authData = {
            name: formData.get(formFields.name),
            password: formData.get(formFields.password),
            isAdmin: formData.get(formFields.isAdmin),
        }
        console.log(authData)
        axios.post(props.url, authData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
       <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Please {props.name}</h1>
            <div className="form-floating m-1">
                <input type="text" name={formFields.name} className="form-control" id="floatingInput" placeholder="Arnold"/>
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div class="form-floating m-1">
                <input type="password" name={formFields.password} className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>

            {props.admin === true ? 
                <div class="form-check text-start my-3 m-1">
                    <input className="form-check-input" name={formFields.isAdmin} type="checkbox" value="admin" id="admin"/>
                    <label className="form-check-label" htmlFor="admin">
                        admin
                    </label>
                </div>
            : ''}

            <button className="btn btn-primary w-100 py-2" type="submit">{props.name}</button>
        </form>
       </div>
    );
  }
  
  export default AuthForm;