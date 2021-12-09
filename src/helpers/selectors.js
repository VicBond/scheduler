export function getAppointmentsForDay(state, day) {
  let result = [];

  const filteredDays = state.days.filter(elem => elem.name === day);

  if(!filteredDays.length){
    return result;
  }

  if(filteredDays.length){
    result = filteredDays[0].appointments.map(el => state.appointments[el]);
  }


  return result;
}