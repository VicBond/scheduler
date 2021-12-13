import React from 'react'
import "./styles.scss";
import useVisualMode from "hooks/useVisualMode"
// Appointments components
import Header from "components/Appointment/Header.js";
import Empty from "components/Appointment/Empty.js";
import Show from "components/Appointment/Show.js";
import Confirm from "components/Appointment/Confirm.js";
import Status from "components/Appointment/Status.js";
// import Error from "components/Appointment/Error.js";
import Form from "components/Appointment/Form.js";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVE = "SAVE";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";

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

  function confirmation() {
    transition(CONFIRM);
  }

  function deleteInterview() {
    transition(DELETE);

    props.cancelInterview(props.id)
      .then(() => transition(EMPTY));
  } 

  return (
  <article className="appointment">
    <Header time={props.time} />
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      < Show
     student={props.interview.student}
     interviewer={props.interview.interviewer}
     onDelete={() => transition(CONFIRM)}
      />
    )}
    {mode === CREATE && (
    <Form 
    interviewers={props.interviewers}
    onCancel={back}
    onSave={save}
    />)}
    {mode === SAVE && <Status message="Saving"/>}
    {mode === DELETE && <Status message="Deleting"/>}
    {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onConfirm={deleteInterview}
          onCancel={back}
        />
      )}
  </article>)

}