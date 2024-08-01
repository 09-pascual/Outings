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
  });
};

export const getOutingById = (outingId) => {
  return fetch(`http://localhost:8088/Outings/${outingId}`).then((res) =>
    res.json()
  );
};
