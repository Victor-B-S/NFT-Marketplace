import classes from "./RegisterForm.module.css";


function RegisterForm() {
  return (
    <form className={classes.formRegister}>
      <div className={classes.formGroup}>
        <input type="text" 
        placeholder="Username" 
        className={classes.registerUser} />
      </div>

      <div className={classes.formGroup}>
        <input 
        type="email" 
        placeholder="Email Address" 
        className={classes.registerEmail} />
      </div>

      <div className={classes.formGroup}>
        <input
          type="password"
          placeholder="Password"
          className={classes.registerPassword}
        />
      </div>
      
      <div className={classes.formGroup}>
        <input
          type="password"
          placeholder="Confirm Password"
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
