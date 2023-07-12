import classes from "./SearchBar.module.css"

import MagnifyingGlass from "../../images/SearchBar/MagnifyingGlass.svg"

const clickHandler = () => {
    console.log("clicked");
}

export default function SearchBar() {
    return (
        <div className={classes.searchBarHolder}>
            <input type="text" placeholder="Search your favourite NFTs" className={classes.searchBar} />
            <img src={MagnifyingGlass} className={classes.searchIcon} onClick={clickHandler}></img>
        </div>
    )
}