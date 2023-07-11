import RegisterForm from "./RegisterForm";

import bgRegister from "./images/Image Placeholder.svg";

import classes from "./Register.module.css";

function Register() {
  
  
  
    return (
    <div className={classes.registerGrid}>
      <div className={classes.registerBg}>
      <img 
        src={bgRegister}
        />
      </div>
      <div className={classes.registerForm}>
        <h2>Create Account</h2>
        <p>
          Welcome! enter your details and start
          <br /> creating, collecting and selling NFTs.
        </p>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
