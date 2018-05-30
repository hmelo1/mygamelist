class AddAttachmentImageToScreenshots < ActiveRecord::Migration[5.2]
  def self.up
    change_table :screenshots do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :screenshots, :image
  end
end
