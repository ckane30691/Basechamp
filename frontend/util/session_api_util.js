
export const login = user => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session',
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user
  })
);

export const dummyLogin = () => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {
      user: {
      username: "Astronaut_Bill",
      password: "password"
      }
    }
  })
)
