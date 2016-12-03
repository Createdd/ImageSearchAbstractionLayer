# Author
![@DDCreationStudios](https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAcwAAAAJDg1MDE4YWFjLTIwN2EtNDJhZC1hNGE2LTY4NjRmZGM2ZmQ2ZA.jpg)

Created by Daniel Deutsch

<kbd>
[Github](https://github.com/DDCreationStudios) / [FreeCodeCamp](https://www.freecodecamp.com/ddcreationstudios) / [CodePen](http://codepen.io/ddcreationstudios/) / [LinkedIn](https://www.linkedin.com/in/daniel-deutsch-b95611127) / [Site](http://ddcreationstudios.at//) / [E-Mail](mailto:office@ddcreationstudios.at)
</kbd>

# FreeCodeCamp API Projects: Image Search Abstraction Layer

##Watch it on Heroku:
https://ddcreationstudios-imagesearch.herokuapp.com/
## User stories:
1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.

## Example creation usage:

```js
https://ddcreationstudios-imagesearch.herokuapp.com/search/code
https://ddcreationstudios-imagesearch.herokuapp.com/search/code?offset=2
https://ddcreationstudios-imagesearch.herokuapp.com/latest
```

## Example creation output:

```js
Search:
{
"url": "http://i.imgur.com/1k25qTQ.gif",
"snippet": "A magical way to bypass the secret source code for Android phones and without the need to format mobile phone",
"context": "https://imgur.com/1k25qTQ"
}
```
```js
Latest:
{
"term": "code",
"when": "2016-12-03T10:14:34.971Z"
},

```


#####Thx to Michael Lefkowitz for providing help
https://github.com/leftynaut
