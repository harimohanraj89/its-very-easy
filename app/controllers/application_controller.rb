class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def self.protected_launch?
    ENV["BASIC_AUTH_USERNAME"].present? && ENV["BASIC_AUTH_PASSWORD"].present?
  end
end
