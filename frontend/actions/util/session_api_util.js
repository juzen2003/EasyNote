// postUser
export const signUp = (user) => (
  $.ajax ({
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
);

// postSession
export const login = (user) => (
  $.ajax ({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
);

// deleteSession
export const logout = () => (
  $.ajax ({
    url: '/api/session',
    method: 'DELETE'
  })
);
