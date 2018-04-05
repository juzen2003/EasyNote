json.set! @note.id do
  json.extract! @note, :id, :title, :body, :user_id, :notebook_id
end

# {
#     "3": {
#         "id": 3,
#         "title": "test3",
#         "body": "test_body",
#         "user_id": 8,
#         "notebook_id": null
#     }
# }
