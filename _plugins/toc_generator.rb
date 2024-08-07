Jekyll::Hooks.register :posts, :pre_render do |post|
  toc = []
  post.content.scan(/<h(\d) id="(.*?)">(.*?)<\/h\1>/).each do |level, id, text|
    toc << {
      'level' => level.to_i,
      'id' => id,
      'text' => text
    }
  end
  post.data['toc'] = toc
end
