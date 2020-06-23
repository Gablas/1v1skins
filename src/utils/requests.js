import axios from "axios";

export function getID(name) {
  return new Promise((resolve, reject) => {
    axios
      .get("/getid", {
        params: {
          name,
        },
      })
      .then(function (response) {
        resolve([response.data.id, response.data.name]);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function getName(id) {
  return new Promise((resolve, reject) => {
    axios
      .get("/getname", {
        params: {
          id,
        },
      })
      .then(function (response) {
        resolve([response.data.id, response.data.name]);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
