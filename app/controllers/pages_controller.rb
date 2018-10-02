class PagesController < ApplicationController
  def coming_soon
    @page = ComingSoonPage.instance
  end
end
