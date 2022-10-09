import "./SearchIcon.scss";
import search from "../../assets/search.png";

function SearchIcon({ active }) {
  return (
    <div className={`searchIcon ${active ? "active" : ""}`}>
      <img src={search} alt="searchIcon" />
    </div>
  );
}

export default SearchIcon;
