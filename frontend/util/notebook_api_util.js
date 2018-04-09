export const createNote = (notebook) => (
  $.ajax ({
    url: '/api/notebooks',
    method: 'POST',
    data: { notebook }
  })
);

export const updateNote = (notebook) => (
  $.ajax ({
    url: `/api/notebooks/${notebook.id}`,
    method: 'PATCH',
    data: { notebook }
  })
);

export const fetchNote = (id) => (
  $.ajax ({
    url: `/api/notebooks/${id}`,
    method: 'GET',
  })
);

export const fetchAllNotes = () => (
  $.ajax ({
    url: '/api/notebooks',
    method: 'GET',
  })
);

export const deleteNote = (notebook) => (
  $.ajax ({
    url: `/api/notebooks/${notebook}`,
    method: 'DELETE'
  })
);
