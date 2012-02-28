::File.open('/tmp/dhdbg', 'a') do |dhdbg| 
  dhdbg.puts "::File.expand_path(__FILE__): #{::File.expand_path(__FILE__)}"
  dhdbg.puts "release_path: #{release_path}"
  #dhdbg.puts "run_context.send(:release_path): #{run_context.send(:release_path)}"
end

