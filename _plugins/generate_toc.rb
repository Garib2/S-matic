Jekyll::Hooks.register :posts, :pre_render do |post|
  headers = []
  post.content.scan(/<h(\d) id="(.*?)">(.*?)<\/h\1>/).each do |level, id, text|
    headers << {
      "level" => level.to_i,
      "id" => id,
      "text" => text
    }
  end
  post.data["headers"] = headers
end
