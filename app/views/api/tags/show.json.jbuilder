json.set! :notesID do
     json.array! @tag.notes.map(&:id)
 end

json.extract! @tag, :id, :name, :user_id

# {
#     "id": 2,
#     "name": "test tag 1",
#     "user_id": 8
# }

# {
#     "notesID": [],
#     "id": 6,
#     "name": "TTAG",
#     "user_id": 8
# }
