import React, {useState} from 'react';
import Heading from '../../Layout/Heading';
import Modal from '../Buttons/Modal';
import WorkForm from '../Work/WorkForm';
import Display from '../Work/Display'

function Work() {
    const [displayForm, setDisplay] = useState(false);
    let [workExp, addWorkExp] = useState([]);
  
    const handleDisplay = () => {
      setDisplay(!displayForm);
    };
  
    const saveWork = (workInfo) => {
      const newWorkExp = [...workExp, workInfo];
      addWorkExp(newWorkExp);
      handleDisplay();
    };
  
    const deleteHist = (id) => {
      const newWorkExp = [...workExp];
      newWorkExp.splice(id, 1);
      addWorkExp(newWorkExp);
    };
  
  return (
    <div>
      <Heading title="Work Experience" />
      
      {workExp.map((workHist) => (
        <Display
          workHist={workHist}
          key={workHist.id}
          deleteHist={deleteHist}
        />
      ))}
      <WorkForm
        displayForm={displayForm}
        handleDisplay={handleDisplay}
        saveWork={saveWork}
      />
      <Modal title="Work Experience" handleDisplay={handleDisplay} />
    </div>
  )
}

export default Work