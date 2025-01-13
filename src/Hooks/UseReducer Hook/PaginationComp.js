import React, { useReducer } from 'react';

const initialState = {
  currentPage: 1,
  totalPages: 10, // This can be dynamically set based on the data
};

function paginationReducer(state, action) {
  switch (action.type) {
    case 'NEXT_PAGE':
      return {
        ...state,
        currentPage: Math.min(state.currentPage + 1, state.totalPages),
      };
    case 'PREVIOUS_PAGE':
      return {
        ...state,
        currentPage: Math.max(state.currentPage - 1, 1),
      };
    case 'SET_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'SET_TOTAL_PAGES':
      return {
        ...state,
        totalPages: action.payload,
      };
    default:
      return state;
  }
}

function PaginationComponent() {
  const [state, dispatch] = useReducer(paginationReducer, initialState);

  const handleNextPage = () => {
    dispatch({ type: 'NEXT_PAGE' });
  };

  const handlePreviousPage = () => {
    dispatch({ type: 'PREVIOUS_PAGE' });
  };

  const handleSetPage = (page) => {
    dispatch({ type: 'SET_PAGE', payload: page });
  };

  // For example, if you want to dynamically set total pages
  const handleSetTotalPages = (totalPages) => {
    dispatch({ type: 'SET_TOTAL_PAGES', payload: totalPages });
  };

  return (
    <div>
      <button onClick={handlePreviousPage} disabled={state.currentPage === 1}>
        Previous
      </button>
      <span> Page {state.currentPage} of {state.totalPages} </span>
      <button onClick={handleNextPage} disabled={state.currentPage === state.totalPages}>
        Next
      </button>
      <div>
        <input
          type="number"
          value={state.currentPage}
          onChange={(e) => handleSetPage(Number(e.target.value))}
          min="1"
          max={state.totalPages}
        />
      </div>
      <div>
        {/* This button is just for demonstration to set total pages dynamically */}
        <button onClick={() => handleSetTotalPages(20)}>Set Total Pages to 20</button>
      </div>
    </div>
  );
}

export default PaginationComponent;
