import React, { useState } from 'react';
import Heading from '../../Layout/Heading'
import Modal from '../Buttons/Modal';
import EduForm from './EduForm'
import Display from '../Education/Display';

function Education() {
  const [displayForm, setDisplay] = useState(false);
  let [edu, addEduInfo] = useState([]);

  const handleDisplay = () => {
    setDisplay(!displayForm);
  };

  const saveEdu = (eduInfo) => {
    const newEduInfo = [...edu, eduInfo];
    addEduInfo(newEduInfo);
    handleDisplay();
  };

  const deleteEdu = (id) => {
    const newEduInfo = [...edu];
    newEduInfo.splice(id, 1);
    addEduInfo(newEduInfo);
  };

  return (
    <div>
      <Heading title="Education" />

      {edu.map((eduHist) => (
        <Display eduHist={eduHist} key={eduHist.id} deleteEdu={deleteEdu} />
      ))}
      <EduForm
        displayForm={displayForm}
        handleDisplay={handleDisplay}
        saveEdu={saveEdu}
      />
      <Modal title="Education" handleDisplay={handleDisplay} />
    </div>
  );
}

export default Education;
