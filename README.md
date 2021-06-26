<img src="https://letmeask-bc5d7.web.app/static/media/logo.a88331cb.svg">

**Letmeask is a _simple_ to use and _fast_ :zap: app that helps you manage your :red_circle:live's questions.**

You can try it yourself [here](https://letmeask-bc5d7.web.app/).

## :speech_balloon: How _Letmeask_ can help you:

:heavy_plus_sign: Create a new room using only your Google authentication.

:clipboard: Easly copy your room's code and share with your audience.

:heavy_check_mark: Mark down questions you've already answered.

:bookmark_tabs: Highlight questions you find important.

:thumbsup: Sort them by number of likes, latest and newest.

### :bust_in_silhouette: Your viewers can:

:eyes: See all questions made even if they're not logged in.

:thumbsup: Like questions they find relevant and want to see answered if they log in.

:clock10: They too can sort questions by number of likes, latest and newest.

## :computer: Technologies used:

The main technology behind this app are __ReactJs__ and __Firebase__. For coding purposes I used __Typescript__ and for styling __SCSS__.

#### Other Javascript modules used:
- Classnames
- Firebase
- React Router Dom

## :no_entry: Disclaimer :no_entry:

This application's design, image assets and idea are not originally mine. The original authors can be found [here](https://rocketseat.com.br/).

The original authors made the majority of the code and its assets publicly avaliable as part of a hands-on crash course in ReactJs.

However, the original code had some space for improvements so I added some features and made some patches to it. My main contributions were:

- "No new questions" warning added to the admin view of the room.
- Navigation and routing improvements: it now redirects commom users to the commom room and room authors to the admin room; wrong url paths now lead to a 404 page; top page logo now sends user to main page.
- Like button and counter improvements: disable button for users not logged in; show likes counter on questions displayed on the admin room.
- Admin's Highlight and Answered buttons now have a toggle behaviour.
- Both room author and users may sort the questions by their number of likes, by newest and by latest.
- Authentication improvements: enabled log in inside commom room; created log out button.