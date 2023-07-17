import ConnectButtons from "./ConnectButtons";

function ConnectWallet() {
  return (
    <>
      <h2>Connect Wallet</h2>
      <p>
        Choose a wallet you want to connect. <br />
        There are several wallet providers.
      </p>
      <ConnectButtons />
    </>
  );
}

export default ConnectWallet;
