import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Search({ searchResults, place }) {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchResults(search);

    setSearch("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
          placeholder={place}
        />
        <button>
          <FiSearch size={19} color="#97A0B9" />
        </button>
      </form>
    </div>
  );
}
