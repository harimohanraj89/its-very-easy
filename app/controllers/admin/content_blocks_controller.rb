module Admin
  class ContentBlocksController < Fae::StaticPagesController

    private

    def fae_pages
      [ComingSoonPage]
    end
  end
end
