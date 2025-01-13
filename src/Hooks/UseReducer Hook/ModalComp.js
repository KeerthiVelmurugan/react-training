import React, { useReducer } from 'react';
import './Modal.css';


const initialState = {
  modalA: false,
  modalB: false,
  modalC: false,
};

function modalsReducer(state, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        [action.payload]: true,
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        [action.payload]: false,
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    default:
      return state;
  }
}

function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
}

function ModalsComponent() {
  const [state, dispatch] = useReducer(modalsReducer, initialState);

  const showModal = (modalName) => {
    dispatch({ type: 'SHOW_MODAL', payload: modalName });
  };

  const hideModal = (modalName) => {
    dispatch({ type: 'HIDE_MODAL', payload: modalName });
  };

  const toggleModal = (modalName) => {
    dispatch({ type: 'TOGGLE_MODAL', payload: modalName });
  };

  return (
    <div>
      <button onClick={() => showModal('modalA')}>Show Modal A</button>
      <button onClick={() => showModal('modalB')}>Show Modal B</button>
      <button onClick={() => showModal('modalC')}>Show Modal C</button>
      <button onClick={() => toggleModal('modalA')}>Toggle Modal A</button>

      <Modal isVisible={state.modalA} onClose={() => hideModal('modalA')}>
        <h1>Modal A</h1>
        <p>This is the content of Modal A.</p>
      </Modal>

      <Modal isVisible={state.modalB} onClose={() => hideModal('modalB')}>
        <h1>Modal B</h1>
        <p>This is the content of Modal B.</p>
      </Modal>

      <Modal isVisible={state.modalC} onClose={() => hideModal('modalC')}>
        <h1>Modal C</h1>
        <p>This is the content of Modal C.</p>
      </Modal>
    </div>
  );
}

export default ModalsComponent;
