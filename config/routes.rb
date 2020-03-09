Rails.application.routes.draw do
  get 'slots/index'

  root "slots#index"
end
