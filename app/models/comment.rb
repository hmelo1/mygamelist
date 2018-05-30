class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :game

  def username
    user =  User.find(self.user_id)
    user.email
  end
end
