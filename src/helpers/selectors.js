export const getAppointmentsForDay = (state, day) => {
  const filteredDays = state.days.find(elem => elem.name === day);

  let result = [];

  if (!filteredDays) {
    return result;
  }

  for (const id in state.appointments) {
    if (filteredDays.appointments.includes(Number(id))) {
      result.push(state.appointments[id]);
    }
  }

  return result;
};

export const getInterview = (state, interview) => {
  if (!interview) return null;
  
  return {
    student : interview.student,
    interviewer : state.interviewers[interview.interviewer]
  };
};