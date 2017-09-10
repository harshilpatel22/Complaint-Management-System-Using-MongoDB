# smplReview
Simple customer review form that allows you to move customers with complaints to your internal reply system and happy customers to a review of your choice.

<b>Configurable rating system</b><br>
smplReview allows you to use simple Good & Bad ratings or allows for a more fine tuned star based approach.  

<b>Set your own review floor & list as many review sites as you want</b><br>
You can set a floor for reviews so you can help insure only highly happy customers are sent to your review sites.  By default I suggest setting it to 4 so users that rate you 3 or less are automatically sent to your email so you can rectify the situation without being dinged online. 

When a user selects a poor review before seeing your smplReview page, for instance in an email you can enable automatic hiding of the review options all together to help remove the possibility of them clicking a positive review in order to get to a review site.

Review sites will soon have the ability to be weighted so the most important ones get the highest priority.

<b>Themed</b><br>
Easily customize the appeareance to match your site by adjusting the logo and theme via the theme.css file.  

## Usage
The index page can be used as an example of how to deploy smplReview or as the actual review page.  If you're going to be using it as an example page simply upload all the files minus the theme.css file in the public folder and link to them in your page.  Next add the following to your page...

```html
<p>Hello<span id="userName"></span>, thanks for visiting. How would you rate our service?</p>

<div id="smplRating">
</div>
```

The first part is optional while the smplRating is where the forms and buttons will be injected. 

The theme.css is the only file that doesn't if you're deploying to your own page.  If you're deploying the index file as the actual review page then you should include it in your deployment as it will be where you control the pages styling.

### ToDo
* <b>Finish:</b> Create stars for rating system.  
* <b>Add:</b> Add ability to set weights to review sites so site A can appear more then site B.
* <b>Add:</b> Cookies to prevent users from selecting a negative review and refreshing the page in order to access the positive review button.  