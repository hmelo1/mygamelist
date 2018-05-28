require 'test_helper'

class GamelistControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get gamelist_index_url
    assert_response :success
  end

  test "should get new" do
    get gamelist_new_url
    assert_response :success
  end

  test "should get create" do
    get gamelist_create_url
    assert_response :success
  end

  test "should get description" do
    get gamelist_description_url
    assert_response :success
  end

  test "should get screenshot_upload" do
    get gamelist_screenshot_upload_url
    assert_response :success
  end

  test "should get update" do
    get gamelist_update_url
    assert_response :success
  end

end
