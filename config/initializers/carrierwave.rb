CarrierWave.configure do |config|
  if Rails.env.production?
    config.fog_credentials = {
      provider: 'AWS',
      aws_access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
      region: ENV['AWS_REGION'], # Change this unless your bucket is in Oregon
      path_style: true
    }
    config.storage :fog
    config.fog_directory = ENV['AWS_S3_BUCKET']
  else
    config.storage :file
  end
end
