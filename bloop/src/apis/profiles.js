const url = `http://localhost:2737/api/v1/games`;

class ProfileModel {
  static all() {
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => {
        console.log(`Error finding data in ProfileModel.all`, err);
        return { profile: [] };
      });
  }

static getOne(id) {
  return fetch(`${url}/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in ProfileModel.getOne', err);
      return { profile: {} };
    });
  }

  static create(newProfile) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProfile)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in ProfileModel.create', err);
      return { profile: {} };
    });
  }

  static update(profileId, updatedProfile) {
    return fetch(`${url}/${profileId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProfile)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in ProfileModel.update', err);
      return { profile: {} };
    });
  }

  static delete(profileId) {
    return fetch(`${url}/${profileId}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in ProfileModel.delete', err);
      return { profile: {} };
    });
  }
}

export default ProfileModel;

