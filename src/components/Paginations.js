import React from "react";

const Paginations = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  // push to display components in set of 10
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="#" /* page number for a tag linking*/
                className="btn btn-outline-secondary"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Paginations;
