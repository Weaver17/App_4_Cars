import { useEffect, useState } from "react";
import { getAllMakes } from "../../utils/api";

import "./Makes.css";
import MakesCard from "../MakesCard/MakesCard";
import { ITEMS_PER_PAGE } from "../../utils/constants";

type MakesType = {
  Make_ID: number;
  Make_Name: string;
};

function Makes() {
  const [makes, setMakes] = useState<MakesType[]>([]);
  const [filteredMakes, setFilteredMakes] = useState<MakesType[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = ITEMS_PER_PAGE;

  // Extract unique first letters
  const letters = Array.from(
    new Set(makes.map((make) => make.Make_Name[0].toUpperCase()))
  ).sort();

  // Handle letter click
  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setCurrentPage(1); // Reset to page 1 when changing filters
    setFilteredMakes(makes.filter((make) => make.Make_Name.startsWith(letter)));
  };

  // Reset filter
  const resetFilter = () => {
    setSelectedLetter(null);
    setFilteredMakes(makes);
  };

  // Pagination Logic
  const totalPages = Math.ceil(makes.length / itemsPerPage);
  const paginatedMakes = filteredMakes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    getAllMakes()
      .then((data) => {
        const sortedMakes = data.Results.sort((a: MakesType, b: MakesType) => {
          const nameA = a.Make_Name.toLowerCase();
          const nameB = b.Make_Name.toLowerCase();

          const isNumericA = /^\d/.test(nameA); // Check if starts with a number
          const isNumericB = /^\d/.test(nameB);

          if (isNumericA && !isNumericB) return -1; // Numbers first
          if (!isNumericA && isNumericB) return 1; // Letters after numbers
          return nameA.localeCompare(nameB); // Alphabetical sorting
        });

        setMakes(sortedMakes);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="makes">
      <h2 className="makes__title">All Makes</h2>
      {/* Letter Filter */}
      <div className="makes__letter-filter">
        {letters.map((letter) => (
          <button
            key={letter}
            className={`makes__letter-btn ${
              selectedLetter === letter ? "makes__letter-btn_active" : ""
            }`}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </button>
        ))}
        <button
          className="makes__reset-btn"
          type="button"
          onClick={resetFilter}
        >
          Reset
        </button>
      </div>
      <ul className="makes__list">
        {paginatedMakes.map((make, i) => (
          <MakesCard key={i} make={make.Make_Name} id={make.Make_ID} />
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="makes__pagination">
        <button
          className="makes__page-btn makes__page-btn_prev"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        ></button>
        <span className="makes__page">Page {currentPage}</span>
        <button
          className="makes__page-btn makes__page-btn_next"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        ></button>
      </div>
    </section>
  );
}

export default Makes;
