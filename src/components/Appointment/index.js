import React from 'react'
import "./styles.scss";

// Appointments components
import Header from "components/Appointment/Header.js";
import Empty from "components/Appointment/Empty.js";
import Show from "components/Appointment/Show.js";
// import Confirm from "components/Appointment/Confirm.js";
// import Status from "components/Appointment/Status.js";
// import Error from "components/Appointment/Error.js";
// import Form from "components/Appointment/Form.js";

export default function Appointment(props) {
  return (
  <article className="appointment">
    <Header time={props.time} />
    {props.interview ? 
    < Show
     student={props.interview.student}
     interviewer={props.interview.interviewer}
     /> : < Empty />}
  </article>)
  ;

}