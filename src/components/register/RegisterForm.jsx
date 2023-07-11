import classes from "./RegisterForm.module.css";


function RegisterForm() {
  return (
    <form className={classes.formRegister}>
      <div className={classes.formGroup}>
        <input type="text" name="" id="" className={classes.registerUser} />
      </div>

      <div className={classes.formGroup}>
        <input 
        type="email" 
        name="" 
        id="" 
        className={classes.registerEmail} />
      </div>

      <div className={classes.formGroup}>
        <input
          type="password"
          name=""
          id=""
          className={classes.registerPassword}
        />
      </div>
      
      <div className={classes.formGroup}>
        <input
          type="password"
          name=""
          id=""
          className={classes.registerPassword}
        />
      </div>

        <div className={classes.registerButton}>
            <button type="button">Create account</button>
        </div>
      
    </form>
  );
}

export default RegisterForm;
