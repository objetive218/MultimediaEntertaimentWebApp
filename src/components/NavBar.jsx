const NavBar = () => {
    return (
        <nav className="navBar">
            <img src="./movie_24dp_EA3323_FILL1_wght400_GRAD0_opsz24_fill.svg" alt="logo" className="navImage" />
            <ul className="navList">
                <li><img src="./view_cozy_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="principal" /></li>
                <li><img src="./theaters_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="movies" /></li>
                <li><img src="./tv_gen_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="series" /></li>
                <li><img src="./bookmark_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="bookmarks" /></li>
            </ul>
            <img src="./account_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="user" className="navUser" />
        </nav>
    );
}

export default NavBar;
