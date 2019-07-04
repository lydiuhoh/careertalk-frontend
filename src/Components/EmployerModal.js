import React, { useState } from 'react';
import ReactModal from 'react-modal';
import TextareaAutosize from 'react-autosize-textarea';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import { LogoImage, Badge } from './commons';
import { CrossIcon, CalendarIcon } from './Icons';

const propTypes = exact({
  /** State of modal to show or not */
  modal: PropTypes.bool.isRequired,
  /** Function to change the modal state */
  toggleModal: PropTypes.func.isRequired,
  /** Employer Object */
  selectedCompany: PropTypes.object.isRequired,
  /** Fair Object */
  selectedFair: PropTypes.object.isRequired
});

const EmployerModal = ({ modal, toggleModal, selectedCompany, selectedFair }) => {
  const [note, takeNote] = useState('');
  const [isNoteTaking, setIsNoteTaking] = useState(false);
  const {
    degree_requirements,
    hiring_majors,
    hiring_types,
    employer: { company_url, name }
  } = selectedCompany;
  const fairDate = new Date(selectedFair.date).toDateString();
  const timeString = `${selectedFair.start_time} - ${selectedFair.end_time}`;
  const dateString = `${fairDate} ${timeString}`;

  const onTextChange = event => {
    const {
      target: { value }
    } = event;
    takeNote(value);

    if (!isNoteTaking) {
      setIsNoteTaking(true);
    }
  };

  const saveNote = () => {
    console.log(`Saving.. ${note}`);
  };

  return (
    <ReactModal
      style={customStyles}
      isOpen={modal}
      contentLabel="Minimal Modal Example"
      ariaHideApp={false}
    >
      <ModalContainerHeader>
        <h1 style={{ visibility: 'hidden' }}>{selectedCompany.employer.name}</h1>
        <CrossContainer onClick={() => toggleModal({ selected: null })}>
          <CrossIcon />
        </CrossContainer>
      </ModalContainerHeader>
      <ModalContentWrapper>
        <ModalContent>
          <ImageBox url={company_url} />
          <h1 style={{ padding: '5px', fontSize: '20px', textAlign: 'center' }}>{name}</h1>
        </ModalContent>
        <ModalContent>
          <TextareaAutosize
            rows={3}
            style={{ boxSizing: 'border-box', fontSize: '17px' }}
            placeholder="Take note"
            value={note}
            onChange={onTextChange}
          />
          {isNoteTaking && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5px' }}>
              <Badge value="Save" type="button" onClick={saveNote} />
            </div>
          )}
        </ModalContent>
        <ModalContent>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CalendarIcon />
            <h1 style={{ marginLeft: '20px' }}>{dateString}</h1>
          </div>
          <h1 style={{ paddingTop: '7px' }}>{selectedFair.name}</h1>
          <a
            href={`http://${company_url}`}
            style={{ paddingTop: '7px', color: '#4185f4' }}
            target="_"
          >
            {`http://${company_url}`}
          </a>
        </ModalContent>
        <ModalContent>
          <h1>We are hiring</h1>
          <BadgeContainer>
            {hiring_types.map((value, index) => (
              <Badge key={index} value={value} type="hiring" />
            ))}
          </BadgeContainer>
          <h1>Majors</h1>
          <BadgeContainer>
            {hiring_majors.map((value, index) => (
              <Badge key={index} value={value} type="major" />
            ))}
          </BadgeContainer>
          <h1>Degrees</h1>
          <BadgeContainer>
            {degree_requirements.map((value, index) => (
              <Badge key={index} value={value} type="degree" />
            ))}
          </BadgeContainer>
        </ModalContent>
      </ModalContentWrapper>
    </ReactModal>
  );
};

const customStyles = {
  content: {
    top: '100px',
    left: '0',
    right: '0',
    width: '95%',
    margin: 'auto',
    maxWidth: '700px',
    border: '1.5px solid rgb(204, 204, 204)'
  }
};

const ModalContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ModalContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 15px 10px;
`;

const CrossContainer = styled.div`
  cursor: pointer;
`;

const ImageBox = styled(LogoImage)`
  align-self: center;
  padding: 5px;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 0;
`;

EmployerModal.propTypes = propTypes;

export default EmployerModal;
