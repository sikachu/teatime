ActionController::Routing::Routes.draw do |map|
  map.root :controller => 'public'
  map.connect ':id', :controller => 'public', :action => 'show'
end
