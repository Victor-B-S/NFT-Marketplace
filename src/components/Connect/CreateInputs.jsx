import classes from './CreateInputs.module.css';

function CreateInputs() {
    return (
        <form>
            <div className={classes.input_container}>
                <span className={classes.username}></span>
                <input type="text" id="username" placeholder="Username" />
            </div>

            <div className={classes.input_container}>
                <span className={classes.email}></span>
                <input type="email" id="email" placeholder="Email Address" />
            </div>

            <div className={classes.input_container}>
                <span className={classes.password}></span>
                <input type="password" id="password" placeholder="Password" />
            </div>

            <div className={classes.input_container}>
                <span className={classes.password}></span>
                <input type="password" id="password_confirm" placeholder="Confirm Password" />
            </div>

            <button type="submit" className='btn filled tertiary'>Create account</button>
        </form>
    );
}

export default CreateInputs;