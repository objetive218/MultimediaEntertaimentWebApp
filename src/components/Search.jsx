// eslint-disable-next-line react/prop-types
const Search = ({search, handleSearch}) => {
    return (
        <section>
            <form action="#" className='searchForm'>
        <img src="./search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="lupa" />
        <input type="text" value={search} onChange={handleSearch} placeholder='Search for movies or TV series'/>
            </form>
        </section>
    );
}

export default Search;
