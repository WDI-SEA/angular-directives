#Angular Directives

Directives are great for making portable/reusable modules. Once you create a directive, it can be used across many potential projects. In the starter code, we've provided an app setup with a sample directive. Let's create, test, and display two additiona directives.

####Like button

Create a like button directive with a counter. When loaded in to a page, there should be a button that says "like". When you click the button, the counter should go up by 1. For the purposes of this assignment, allow a single user to click the like button as much as they want so each click will increase the number displayed on the button by 1.

The button should have 1 optional parameter `starting-value` which will set the starting value of the like button. If ommitted the values should start at 0.

**Usage**

```html
<like-button starting-value="5"></like-button>
```

The above code should add a like button to the page which will display "Likes: 5". When clicked it would update to "Likes: 6" and so on...

Additionally, you should be able to have multiple like buttons on a single page that each keep their own separate count.

```html
<like-button></like-button>

<like-button starting-value="1"></like-button>

<like-button starting-value="3"></like-button>
```

####Weather

We will create a widget that will display the current weather. Using `$http` to send a call to [openweathermap.org](http://openweathermap.org).

**Usage**

```html
<weather location="Seattle,WA"></weather>
```

The above code should load the current weather conditions for Seattle, WA. You should be able to include different locations.

**API URL**

[http://api.openweathermap.org/data/2.5/weather?q=Seattle,wa](http://api.openweathermap.org/data/2.5/weather?q=Seattle,wa)

Note that you'll need an API key to access this API. For this assignment, you can hardcode the key into the URL.

####Bonus

**Dynamic Model**

Add an ng-location parameter in the `<weather>` directive that can be bound to a scope variable. Test this by creating a text box where the user can enter a location and have the weather update dynamically.

**GPS**

Use **html5 geolocation** to make the `<weather>` directive load the current weather based on the users current location ONLY if location and ng-location are ommitted. the location and ng-location parameters should still work.

```html
<!-- Displays weather for Seattle, WA -->
<weather location="Seattle,WA"></weather>

<!-- Displays weather for the value of $scope.location -->
<weather ng-location="location"></weather>

<!-- Displays weather for users current location -->
<weather></weather>
```
