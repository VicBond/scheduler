export const getAppointmentsForDay = (state, day) => {
  const filteredDays = state.days.filter(elem => elem.name === day);

  if (filteredDays.length > 0) {
    const obj = filteredDays[0].appointments.map(id => state.appointments[id]);
    return obj;
  } else {
    return filteredDays;
  }
};

export const getInterview = (state, interview) => {
  if (!interview) return null;

  for (const id in state.interviewers) {
    if (Number(id) === interview.interviewer) {
      return {
        student: interview.student,
        interviewer: state.interviewers[id]
      };
    }
  }
};

export const getInterviewersForDay = (state, day) => {
  const filteredDays = state.days.filter(elem => elem.name === day);

  if (filteredDays.length > 0) {
    const obj = filteredDays[0].interviewers.map(id => state.interviewers[id]);
    return obj;
  } else {
    return filteredDays;
  }
};