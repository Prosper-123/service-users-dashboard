import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            {pageNumbers.map(pageNumber => (
                <button
                    key={pageNumber}
                    className={currentPage === pageNumber ? 'active' : ''}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </button>
            ))}
        </div>

    )

}

export default Pagination;