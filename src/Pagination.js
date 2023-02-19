import React from "react";
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

import "./Pagination.css";
function Pagination(props) {

  const handlePreviousPage = () => {
    props.setCurrentPage(props.currentPage - 1);
  };

  const handleNextPage = () => {
    props.setCurrentPage(props.currentPage + 1);
  };

  return (


    <div className='pagination'>
      <MDBPagination className='mb-0'>
        <MDBPaginationItem
          disabled={props.currentPage === 1}
          onClick={handlePreviousPage}>
          <MDBPaginationLink><span aria-hidden='true'>«</span></MDBPaginationLink>
        </MDBPaginationItem>

        <MDBPaginationItem
          disabled={props.currentPage * props.elementsPerPage >= props.size}
          onClick={handleNextPage}
        >
          <MDBPaginationLink>
            <span aria-hidden='true'>»</span>
          </MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>

      <select className="select-page"
        value={props.elementsPerPage}
        onChange={(event) => props.setElementsPerPage(Number(event.target.value))}>
        <option value={4}>4 éléments par page</option>
        <option value={8}>8 éléments par page</option>
        <option value={12}>12 éléments par page</option>
      </select>
    </div>


  );
}

export default Pagination;