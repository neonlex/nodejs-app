::File.open('/tmp/dhdbg', 'a') do |dhdbg| 
  dhdbg.puts "::File.expand_path(__FILE__): #{::File.expand_path(__FILE__)}"
end

