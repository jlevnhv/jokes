# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
Joke.create(title: 'Joke One', full_text: 'This is the full joke text')
Joke.create(title: 'Joke Two', full_text: 'This is the full joke text for joke two')
Category.create(name: 'Clean')
Category.create(name: 'Dirty')
Joke.first.categories << Category.first
Joke.second.categories << Category.second
