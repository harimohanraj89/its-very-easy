class PagesController < ApplicationController
  def coming_soon
    @page = ComingSoonPage.instance
  end

  def under_construction
  end

  def app
  end
end
