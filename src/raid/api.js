import apiUrl from '../apiConfig'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const createRaid = (data, user) => {
  return fetch(apiUrl + '/raids', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      raid: data.raid
    })
  })
}

export const updateRaid = (data, user) => {
  return fetch(apiUrl + '/raids/' + data.raid.id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      raid: data.raid
    })
  })
}

export const showRaid = data => {
  return fetch(apiUrl + '/raids' + `${data.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const myRaid = user => {
  return fetch(apiUrl + '/my-raids', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}
