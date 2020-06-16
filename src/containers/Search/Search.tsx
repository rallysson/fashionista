import React, { ReactElement, useState } from "react";
import { useSelector } from "react-redux";

import { CardSearch } from "../../components/CardSearch";
import { RootState } from "../../store";

import "./search.scss";

function Search(): ReactElement {
  const [search, setSearch] = useState("");
  const items = useSelector((state: RootState) => state.products.data);
  const regexSearch = new RegExp(search, "ig");

  const filterdItems = items.filter((item) => regexSearch.test(item.name));
  return (
    <div className="search">
      <div className="search__inputContainer">
        <input
          placeholder="Digite para pesquisar"
          onChange={(e) => setSearch(e.target.value)}
          className="search__input"
          type="text"
        />
      </div>
      {filterdItems.map((item) => (
        <CardSearch key={item.code_color} item={item} />
      ))}
    </div>
  );
}

export { Search };
