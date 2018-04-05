export const createNote = (note) => (
  $.ajax ({
    url: '/api/notes',
    method: 'POST',
    data: { note }
  })
);

export const udpateNote = (note) => (
  $.ajax ({
    url: `/api/notes/${note.id}`,
    method: 'PATCH',
    data: { note }
  })
);

export const fetchNote = (id) => (
  $.ajax ({
    url: `/api/notes/${id}`,
    method: 'GET',
  })
);

export const fetchAllNotes = () => (
  $.ajax ({
    url: '/api/notes',
    method: 'GET',
  })
);

export const deleteNote = (note) => (
  $.ajax ({
    url: `/api/notes/${note}`,
    method: 'DELETE'
  })
);
