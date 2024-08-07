Jekyll::Hooks.register :pages, :post_render do |page|
  if page.extname == ".html"
    toc = []
    page.output.scan(/<h(\d) id="(.*?)">(.*?)<\/h\1>/).each do |level, id, text|
      toc << {
        'level' => level.to_i,
        'id' => id,
        'text' => text
      }
    end
    page.data['toc'] = toc
  end
end
