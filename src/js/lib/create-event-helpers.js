export function isPoll (data) {

  return !!data.eventWhat[1] || !!data.eventWhere[1] || !!data.eventWhen[1];
}

export function cleanEventData (event) {

  const newEvent = Object.assign({}, event);

  newEvent.eventWhat = event.eventWhat.filter((item, _, array) => {

    if (array.length === 1) {
      return true;
    } else if (array.length > 1) {
      return item !== '';
    }
  });
  newEvent.eventWhere = event.eventWhere.filter((item, _, array) => {

    if (array.length === 1) {
      return true;
    } else if (array.length > 1) {
      return item.placeName !== '';
    }
  });

  newEvent.eventWhen = event.eventWhen.filter((item, _, array) => {

    if (array.length === 1) {
      return true;
    } else if (array.length > 1) {
      return item.date !== '';
    }
  });
  return newEvent;
}
