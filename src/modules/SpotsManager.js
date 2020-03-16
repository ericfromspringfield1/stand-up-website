const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/spots/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/spots`).then(result => result.json())
  },
  
  post(newSpot) {
    return fetch(`${remoteURL}/spots`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSpot)
    }).then(data => data.json())
}, 

  update(editedSpot) {
    return fetch(`${remoteURL}/spots/${editedSpot.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedSpot)
    }).then(data => data.json());
  },
  
  delete(id) {
      return fetch(`http://localhost:8088/spots/${id}`, {
          method: "DELETE"
      })
      .then(result => result.json())
    }

}