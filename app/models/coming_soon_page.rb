class ComingSoonPage < Fae::StaticPage

  @slug = 'coming_soon'

  # required to set the has_one associations, Fae::StaticPage will build these associations dynamically
  def self.fae_fields
    {
      background_image: { type: Fae::Image },
      heading: { type: Fae::TextField },
      subheading: { type: Fae::TextField }
    }
  end

end
