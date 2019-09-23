export function getAllCards() {
  return fetchCards()
}

export function getSingleCard(id) {
  return fetchCards({ id })
}

export function postCard(data) {
  return fetchCards({ method: 'POST', data })
}

export function patchCard(id, data) {
  return fetchCards({ method: 'PATCH', id, data })
}

export function deleteCard(id) {
  return fetchCards({ method: 'DELETE', id })
}

function fetchCards({ id = '', method = 'GET', data } = {}) {
  //return fetch('http://localhost:3333/cards/' + id, {
  return fetch('/cards/' + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  }).then(res => res.json())
}
