@notes.each do |note|
  json.set! note.id do
    json.extract! note, :id, :title, :body, :body_with_style, :user_id, :notebook_id, :created_at, :updated_at
  end
end


# {
#     "2": {
#         "id": 2,
#         "title": "new_title",
#         "body": "new_body",
#         "user_id": 8,
#         "notebook_id": null
#     },
#     "3": {
#         "id": 3,
#         "title": "test3",
#         "body": "test_body",
#         "user_id": 8,
#         "notebook_id": null
#     }
# }
