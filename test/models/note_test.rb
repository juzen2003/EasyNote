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

require 'test_helper'

class NoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
