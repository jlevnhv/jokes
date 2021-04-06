class JokesController < ApplicationController
  def index
    jokes = Joke.all
    render json: jokes.to_json(include: :categories)
  end

  def show
    joke = Joke.find(params[:id])
    render json: joke.to_json(include: :categories)
  end
end
