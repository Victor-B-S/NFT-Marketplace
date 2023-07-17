import SearchBar from "./UI/SearchBar"
import classes from "./Browse.module.css"

export default function Browse() {
    return (
        <div className="browse-marketplace">
            <h3>Browse Marketplace</h3>
            <p>Browse through more than 50k NFTs on the NFT Marketplace</p>
            <SearchBar />
        </div>
    )
}