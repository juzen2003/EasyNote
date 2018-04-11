@tags.each do |tag|
  json.set! tag.id do
    json.extract! tag, :id, :name, :user_id, :created_at, :updated_at
  end
end


# {
#     "2": {
#         "id": 2,
#         "name": "test tag 1",
#         "user_id": 8,
#         "created_at": "2018-04-11T21:10:49.442Z",
#         "updated_at": "2018-04-11T21:10:49.442Z"
#     },
#     "3": {
#         "id": 3,
#         "name": "TT1",
#         "user_id": 8,
#         "created_at": "2018-04-11T21:13:39.902Z",
#         "updated_at": "2018-04-11T21:13:39.902Z"
#     }
# }
