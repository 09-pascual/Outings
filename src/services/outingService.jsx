export const getAllOutings = () => {
  return fetch(`http://localhost:8088/Outings`).then((res) => res.json());
};

export const getOutingTypes = () => {
  return fetch(`http://localhost:8088/outingTypes`).then((res) => res.json());
};

export const createOuting = (outing) => {
  return fetch(`http://localhost:8088/Outings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(outing),
  }).then((res) => res.json());
};

export const deleteOuting = (outingId) => {
  return fetch(`http://localhost:8088/outings/${outingId}`, {
    method: "DELETE",
  });
};

export const updateOuting = (outing) => {
  return fetch(`http://localhost:8088/outings/${outing.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(outing),
  }).then((res) => res.json());
};

export const updateEvent = (event) => {
  return fetch(`http://localhost:8088/Events/${event.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  }).then((res) => res.json());
};

export const getOutingById = (outingId) => {
  return fetch(`http://localhost:8088/Outings/${outingId}`).then((res) =>
    res.json()
  );
};

export const getEventByOutingById = (outingId) => {
  return fetch(`http://localhost:8088/Outings/${outingId}/events`).then((res) =>
    res.json()
  );
};

export const createEventForDay = (event) => {
  return fetch(`http://localhost:8088/Events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
};

export const deleteEvent = (eventId) => {
  return fetch(`http://localhost:8088/Events/${eventId}`, {
    method: "DELETE",
  });
};
