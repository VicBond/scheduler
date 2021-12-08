import React from "react";
import "./InterviewerListItem.scss";
import classNames from "classnames";


const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};

export default function InterviewerListItem(props) {
 
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected ": props.selected,
  });

  return (
    <li className={interviewerClass} onClick={() => props.setInterviewer(interviewer.id)}>
    <img
      className="interviewers__item-image"
      src={interviewer.avatar}
      alt={interviewer.name}
    />
    {interviewer.name && props.selected}
  </li>
  );
}