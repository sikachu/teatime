class PublicController < ApplicationController
  def index
  end

  def show
    if params[:id].match(/^(\d+)(min(?:|ute)s?|h(?:|ou)rs?|sec(?:|ond)s?)$/i)
      @amount = $1.to_i.send($2).to_i
    else
      redirect_to root_path
    end
  end

end
