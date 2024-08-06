source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "faraday-retry"

# Jekyll 테마 및 플러그인
gem "jekyll-theme-text", "~> 2.0"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows 플랫폼에 필요한 gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Windows에서 디렉토리 감시 성능을 향상시키는 gem
gem 'wdm', '>= 0.1.1', platforms: [:mingw, :mswin, :x64_mingw]

# JRuby 플랫폼에 필요한 gem
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]
