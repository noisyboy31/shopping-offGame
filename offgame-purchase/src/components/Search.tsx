import React from "react";

type SearchBarProps = {
  value: string;
  onChange: any;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="container">
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="form">
            <input
              type="text"
              name="query"
              className="form-control my-4"
              placeholder="Search.."
              value={value}
              onChange={(e) => onChange(e.currentTarget.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
