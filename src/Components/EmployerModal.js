import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import { CrossIcon } from './Icons';

export default props => {
  const { modal, toggleModal, selectedCompany } = props;

  return (
    <ReactModal
      style={customStyles}
      isOpen={modal}
      contentLabel="Minimal Modal Example"
      ariaHideApp={false}
    >
      <ModalContainer>
        <h1>{selectedCompany.employer.name}</h1>
        <CrossContainer onClick={() => toggleModal({ selected: null })}>
          <CrossIcon />
        </CrossContainer>
      </ModalContainer>
      <ModalContainer>
        <ModalContent>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </h1>
        </ModalContent>
      </ModalContainer>
    </ReactModal>
  );
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '90%',
    maxWidth: '700px',
    transform: 'translate(-50%, -50%)',
    border: '1.5px solid rgb(204, 204, 204)'
  }
};

const ModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalContent = styled.div`
  padding: 15px 0;
`;

const CrossContainer = styled.div`
  cursor: pointer;
`;
