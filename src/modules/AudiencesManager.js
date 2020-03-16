const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/audiences/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/audiences`).then(result => result.json())
  },

  post(newAudience) {
    return fetch(`${remoteURL}/audiences/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAudience)
    }).then(data => data.json())
},

update(editedAudience) {
    return fetch(`${remoteURL}/audiences/${editedAudience.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAudience)
    }).then(data => data.json());
  },
  
    delete(id) {
      return fetch(`http://localhost:8088/audiences/${id}`, {
          method: "DELETE"
      })
      .then(result => result.json())
    }

}