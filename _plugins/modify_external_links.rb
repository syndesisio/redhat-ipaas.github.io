require 'oga'
require 'uri'

module Jekyll
  module ModifyExternalLinks
    def modify_external_links(raw, internalRegex)
      internalRegex = Regexp.new(internalRegex)
      document = Oga.parse_html(raw)

      a_elems = document.xpath('.//a').reduce([]) do |accum, link|
        link.attributes.select { |attr| attr.name == 'href' }
                       .reject { |attr| URI(attr.value).host.nil? || internalRegex.match(URI(attr.value).host) }
                       .each { |l| accum << link }
        accum
      end

      a_elems.each do |elem|
          elem.add_attribute(Oga::XML::Attribute.new(:name => "target", :value => "_blank"))
          elem.add_attribute(Oga::XML::Attribute.new(:name => "rel", :value => "nofollow"))
      end

      document.to_xml
    end
  end
end

Liquid::Template.register_filter(Jekyll::ModifyExternalLinks)
