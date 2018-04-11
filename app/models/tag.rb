# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :taggings,
    foreign_key: :tag_id,
    class_name: :Tagging,
    dependent: :destroy

  has_many :notes,
    through: :taggings
end
