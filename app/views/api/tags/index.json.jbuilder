@tags.each do |tag|
  json.set! tag.id do
    json.extract! tag, :id, :name, :user_id, :created_at, :updated_at
  end
end
