// eslint-disable-next-line react/prop-types
const NavBar = ({changePage, setSearch, handleLoginView}) => {
    const handlePage = (page) => {
        changePage(page)
        setSearch("");
    }
    return (
        <nav className="navBar">
            <img onClick={() => handlePage("home")} src="./movie_24dp_EA3323_FILL1_wght400_GRAD0_opsz24_fill.svg" alt="logo" className="navImage" />
            <ul className="navList">
                <li onClick={() => handlePage("home")}><img src="./view_cozy_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="principal" /></li>
                <li onClick={() => handlePage("movies")}><img src="./theaters_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="movies" /></li>
                <li onClick={() => handlePage("series")}><img src="./tv_gen_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="series" /></li>
                <li onClick={() => handlePage("bookMarks")}><img src="./bookmark_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="bookmarks" /></li>
            </ul>
            <img onClick={() => handleLoginView()} src="./account_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="user" className="navUser" />
        </nav>
    );
}

export default NavBar;
