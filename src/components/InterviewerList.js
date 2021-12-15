import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from "prop-types";


export default function InterviewerList(props) {
 
  const parsedInterviewerList = props.interviewers.map(interviewer => {
    return (
    <InterviewerListItem 
      key={interviewer.id} {...interviewer} 
      selected={interviewer.id === props.value} 
      setInterviewer={() => props.onChange(interviewer.id)} 
    />
    )
  });

return(
  <section className="parsedInterviewerList">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{parsedInterviewerList}</ul>
  </section>
);
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};