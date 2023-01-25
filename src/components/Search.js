import React from "react";
import { Link } from "react-router-dom";
import searchicon from "../images/search.png";
import { useLocation } from "react-router-dom";
import { get } from "../services/service";

const Search = () => {
  const [query, setQuery] = React.useState("");
  const [all, setAll] = React.useState([]);

  React.useEffect(() => {
    getAll();
  }, []);

  // console.log(all);

  const getAll = async () => {
    const response = await get("/posts/all");

    setAll(response.data);
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <div className="search-bar">
      <div className="searc-container">
        <input
          className="input-search"
          type="text"
          value={query}
          placeholder="Strains, accessories, and more..."
          onChange={(event) => setQuery(event.target.value)}
        />
        {query && (
          <p onClick={clearSearch} className="img-search">
            X
          </p>
        )}
      </div>
      {all &&
        all
          .filter((post) => {
            if (query === "") {
              return null;
            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          })
          .map((post, index) => (
            // <div className="box-section">
            <ul className="dropdown" key={index}>
              <li>
                <Link onClick={clearSearch} to={`/${post.typeOfCategory}`}>
                  <p>{post.title}</p>
                </Link>
              </li>
            </ul>
            // </div>
          ))}
    </div>
  );
};

export default Search;
