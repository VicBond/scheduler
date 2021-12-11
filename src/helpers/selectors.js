export const getAppointmentsForDay = (state, day) => {
  const filteredDays = state.days.filter(elem => elem.name === day);

  let result = [];

  if (!filteredDays) {
    return result;
  }
  if (filteredDays.length){
    result = filteredDays[0].appointments.map(elem => state.appointments[elem]);
  }
  // for (const id in state.appointments) {
  //   if (filteredDays.appointments.includes(Number(id))) {
  //     result.push(state.appointments[id]);
  //   }
  // }

  return result;
};


export const getInterview = (state, interview) => {
  if (!interview) return null;
  
  return {
    student : interview.student,
    interviewer : state.interviewers[interview.interviewer]
  };
};


export const getInterviewersForDay = (state, day) => {
  const filteredDays = state.days.filter(elem => elem.name === day);

  let result = [];

  if (!filteredDays) {
    return result;
  }

  if (filteredDays.length){
    result = filteredDays[0].interviewers.map(elem => state.interviewers[elem]);
  }
  // for (const id in state.interviewers) {
  //   if (filteredDays.interviewers.includes(Number(id))) {
  //     result.push(state.interviewers[id]);
  //   }
  // }

  return result;
};