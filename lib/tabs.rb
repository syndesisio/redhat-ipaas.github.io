module Tabs
  def block_code(code, full_area_name)
    if full_area_name
      parts = full_area_name.split('--')
      rouge_area_name = (parts) ? parts[0] : "" # just parts[0] here causes null ref exception when no areauage specified
      super(code, rouge_area_name).sub("highlight #{rouge_area_name}") do |match|
        match + " tab-" + full_area_name
      end
    else
      super(code, full_area_name)
    end
  end
end

require 'middleman-core/renderers/redcarpet'
Middleman::Renderers::MiddlemanRedcarpetHTML.send :include, Tabs
