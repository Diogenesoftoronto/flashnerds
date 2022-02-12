# Flashnerds
Flashnerds is a combination of an education and social networking application that is designed to help people to learn and grow. It is a platform for people to share and like their favourite flashcards and find others with similar information.

### Stack
* PostgreSQL
* React
* Express
* Node
* Sass
* Webpack
* Axios
* Websockets
* Heroku
* Cypress
* Jest
* Storybook
## Features
* Flashcards
* Profiles
* Likes
* Comments 
* Search for flashcards and profiles
* tag flashcards
* follow tags
* __stretch__
* add a share ability
* communities
## User Stories
1. As a user, I want to be able to create a flashcard.
1. As a user, I want to be able to view a flashcard.
1. As a user, I want to be able to edit a flashcard.
1. As a user, I want to be able to delete a flashcard.
1. As a user, I want to be able to like a flashcard.
1. As a user, I want to be able to comment on a flashcard.
1. As a user, I want to be able to search for flashcards and profiles.
1. As a user, I want to be able to tag flashcards.
1. As a user, I want to be able to view a deck of flashcards.
1. As a user, I want to be able to follow tags.
1. As a user, I want to be able to create a profile.
1. As a user, I want to be able to view a profile.
1. As a user, I want to be able to edit a profile.
1. As a user, I want to be able to delete a profile.
## User Scenarios
<!-- A user scenario is a syntactic alternative to user stories
They have the form: Given __, when _, then ____.
eg. Given that I am logged in, when I click favourite on a post, then it is added to my favourites.
You can also chain on an and to user stories/scenarios
1.eg. Given that I am logged in, when I click favourite on a post, then it is added to my favourites and the 
save icon will change to indicate success. Be more vague, not too specific.-->
1. Scene 1:
    1. Given that I am not logged in, when I view the page, then I should see a login form.
    1. Given that I am logged in, when I view the page, then I should see a random flashcard.
    1. Given that I see a flashcard, when I reveal the card, I should see the back of the card.
    1. Given that I see the back of the card, when I arro the card, I should see the next card.
    1. Given that I see a flashcard, when I click add, I should have that card added to my collection.
    1. Given that I see a flashcard, when I click remove, I should have that card removed from my collection.
    1. Given that I see a flashcard, when I click like, I should have that card liked.
    1. Given that I see a flashcard, when I click comments, then I should see the comments on the card.
        1. Given that I see the comments on the card, when I click click comment, then I should see a comment form.
        1. Given that I see the comment form, when I enter a comment, then I should see the comment on the card.
    1. Given that I see a flashcard, when I click share, then I should see a share the card.
1. Scene 2: 
   1. Given that I am logged in, when I view the navbar, then I should see a search bar.
   1. Given that I see a search bar, when I type in a search term, then i should be able to search by tag, flashcard or profile.
   1. Given that I search for my desired flashcard, tag or profile, when I click on the result, then I should be able to view the flashcard, tag or profile. 
1. Scene 3:
    1. Given that I am logged in, when I view the navbar, then I should see a profile icon.
      1. Given that I see that I see a profile, when I click on the flashcard icon, then I should be able to view my deck.
      <!-- 1. Given that I see my deck, when I click on the edit button, then I should be able to edit my collection. -->
      1. Given that I see a collection, when I click on the delete button, then I should be able to delete my collection.
    1. Given that I see a profile icon, when I click on the profile icon, then I should be able to view my profile.
    1. Given that I see a profile, when I click on the edit profile button, then I should be able to edit my profile.
    1. Given that I see a profile, when I click on the delete profile button, then I should be able to delete my profile.
1. Scene 4:
    1. Given that I am logged in, when I view the navbar, then I should see a logout icon.
    1. Given that I see a logout icon, when I click on the logout icon, then I should be able to logout.
    1. Given that I am logged out, when I view the page, then I should see a login form.
1. Scene 5:
    1. Given that I am logged in, when I view the navbar, then I should see a create icon.
    1. Given that I see a create icon, when I click on the create icon, then I should see the flashcard form.
    1. Given that I see the flashcard form, when I fill in the form, then I should be able to create a flashcard.
    1. Given that I create a flashcard, when I view the page, then I should see the flashcard.

## Routes
<!-- full RESTful compliance -->
* Browse 
  ** get: /, user/:id, /login, /register
* Read
  ** get: /deck/:id, /flashcard/:id, /comments_section/:id 
* Edit 
  ** put: /deck/:id
  ** patch: /comments_section/:id/comment/:id
  ** patch: /flashcard/:id
* Add 
  ** post: user/:id/deck/:id 
  ** post: deck/:id/flashcard/:id
  ** post: user/:id/comments_section/:id/comment/:id
* Delete 
  ** DELETE: /deck/:id
  ** DELETE: /flashcard/:id
  ** DELETE: /comments_section/:id/comment/:id 
  ** DELETE: /user/:id


      