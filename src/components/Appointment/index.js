import React from 'react'
import "./styles.scss";
import useVisualMode from "hooks/useVisualMode"
// Appointments components
import Header from "components/Appointment/Header.js";
import Empty from "components/Appointment/Empty.js";
import Show from "components/Appointment/Show.js";
// import Confirm from "components/Appointment/Confirm.js";
// import Status from "components/Appointment/Status.js";
// import Error from "components/Appointment/Error.js";
import Form from "components/Appointment/Form.js";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVE = "SAVE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVE);
    props
    .bookInterview(props.id, interview)
    .then(() => transition(SHOW));
  }

  return (
  <article className="appointment">
    <Header time={props.time} />
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      < Show
     student={props.interview.student}
     interviewer={props.interview.interviewer}
      />
    )}
    {mode === CREATE && (
    <Form 
    interviewers={props.interviewers}
    onCancel={back}
    onSave={save}
    />)}
    
  </article>)

}