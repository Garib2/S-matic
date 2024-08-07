Jekyll::Hooks.register :pages, :pre_render do |page|
  if page.extname == '.md'
    toc = []
    page.content.scan(/<h(\d) id="(.*?)">(.*?)<\/h\1>/).each do |level, id, text|
      toc << {
        'level' => level.to_i,
        'id' => id,
        'text' => text
      }
    end
    page.data['toc'] = toc
  end
end
