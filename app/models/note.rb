# == Schema Information
#
# Table name: notes
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  body            :text
#  user_id         :integer          not null
#  notebook_id     :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  body_with_style :text
#

class Note < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :user_id, presence: true

  # TODO: asscociation to be added
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :taggings,
    foreign_key: :note_id,
    class_name: :Tagging

end
