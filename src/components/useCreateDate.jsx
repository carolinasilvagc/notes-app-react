const useCreateDate = () => {
  const dateObj = new Date();
  const month = dateObj.getMonth();
  let monthName;

  switch(month) {
    case 0: monthName = 'Jan';
    break;
    case 1: monthName = 'Fev';
    break;
    case 2: monthName = 'Mar';
    break;
    case 3: monthName = 'Abr';
    break;
    case 4: monthName = 'Mai';
    break;
    case 5: monthName = 'Jun';
    break;
    case 6: monthName = 'Jul';
    break;
    case 7: monthName = 'Ago';
    break;
    case 8: monthName = 'Set';
    break;
    case 9: monthName = 'Out';
    break;
    case 10: monthName = 'Nov';
    break;
    case 11: monthName = 'Dez';
    break;
  }

  const date = `${dateObj.getDate()} de ${monthName} , ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`

  return date;
}

export default useCreateDate;