import classes from "./ConnectWallet.module.css";
import ImageRC from "../UI/ImageRC";
import ConnectWallet from "./ConnectWallet";
import CreateAccount from "./CreateAccount";

function Account(props) {
    const bgConnect = "../src/images/Connect/ImagePlaceholder" + props.forWhat + ".svg";

    return (
        <section className={classes.connectGrid}>
            <ImageRC img={bgConnect} />
            <div className={classes.connectForm}>
                {props.forWhat === 'Connect' ? (
                    <ConnectWallet />
                ) : props.forWhat === 'Create' ? (
                    <CreateAccount />
                ) : (
                    <h1>Erro 404</h1>
                )}
            </div>
        </section >
    );
}

export default Account;
