ActionController::Routing::Routes.draw do |map|
  map.connect ':id', :controller => 'public', :action => 'show'
  map.root :controller => 'public'
end
