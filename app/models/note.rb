# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :string           not null
#  user_id     :integer          not null
#  notebook_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :body, :user_id, presence: true

  # TODO: asscociation to be added
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

end
