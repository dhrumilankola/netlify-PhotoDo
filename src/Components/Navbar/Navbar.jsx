import './navbar.scss';

const Navbar = ({ setCategory, searchVal, setSearchVal }) => {

    const handleSearch = (e) => {
        e.preventDefault();
        setCategory(searchVal);
    }

    return (
        <div className="navbar">
            <div className="banner">
                <div className="layer">
                    <img src="images/camera.png" alt="" />
                    <p className="slogan">
                        Images that captivate your heart
                    </p>
                    <form>
                        <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} type="text" placeholder="Search free high-resolution photos" />
                        <button type="submit" onClick={(e) => handleSearch(e)}>
                            <img src="images/search.png" alt="" />
                        </button>
                    </form>
                </div>
                <img src="images/banner.jpg" alt="" />
            </div>
        </div>
    )
}

export default Navbar