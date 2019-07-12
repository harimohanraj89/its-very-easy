class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_raven_context

  def self.protected_launch?
    ENV["BASIC_AUTH_USERNAME"].present? && ENV["BASIC_AUTH_PASSWORD"].present?
  end

  private

  def set_raven_context
    Raven.extra_context(params: params.to_unsafe_h, url: request.url)
  end
end
