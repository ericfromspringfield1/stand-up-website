const remoteURL = "http://localhost:8088"

export default {
  //get retrieves an object from a specified resource and identifier.
  get(id) {
    return fetch(`${remoteURL}/gigs/${id}`).then(result => result.json())
  },
  //getAll retrieves an array from a specified resource.
  getAll(userId) {
    return fetch(`${remoteURL}/gigs?userId=${userId}&_expand=venue&_expand=spot&_expand=audience`).then(result => result.json()).then(gig => { 
      console.log(gig)
      return gig
    })
  },

  // getWithAudiences(id) {
  //   return fetch(`${remoteURL}/gigs/${id}?_embed=audiences`)
  //           .then(result => result.json())
// },



 //post will append an object from the body of the http request to a specific resource and will retrieve the newly append object in the body of the response.
   post(newGig) {
    return fetch(`${remoteURL}/gigs/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGig)
    }).then(data => data.json())
},
//replaces a representation for the target resourse with the request
  update(editedGig) {
    console.log((editedGig.id))
    return fetch(`${remoteURL}/gigs/${editedGig.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedGig)
    }).then(data => data.json()); 
  },
  //delete deletes an object from specified resource and identifier.
  //we add the method: DELETE because otherwise it's exactly the same as the get(id)
  delete(id) {
    return fetch(`http://localhost:8088/gigs/${id}`, {
      method: "DELETE"
    })
    .then(result => result.json())
  }
  
}
