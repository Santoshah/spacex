# SpaceX

[spaceX demo heroku](https://spacexng.herokuapp.com)

## Heroku deployment

Any commit on this repo will reflect on the `spaceX demo heroku` url.

## Code explanation
Components classified. I have created 3 different component. Dashboard, Menu and spacex-card.
    
Dashboard : 
It is the main layout connecting menu and results.
       
Menu : 
Its is responsible for sidebar menus like list of year from 2006 to 2020. Those years data are static and coming from an array. Launch Success and Successfull landing is static.

spacex-card
This component is for the single card layout. I am looping the entire spacex-card to generate list of results.

# Code Logic explanation.

Starting with menu compoent, the routing part is all set to this component. By default all data is loaded as per the api given in word document. When we click on any date it will add launch_year query param in api and fetch required data. Similar with launch_success and land_success. All three filters are working fine with toggle. The toggle logic is also implemented in this component. If any date is toggle it will behave accordingly. It will reset the api and remove the particular query params from api and load again.

Note: I do not see `launch_landing` attribute in the API. I tried to find alot but no success.


Dashboard component is the wrapper for menu and the spacex-card's loop. The api service is created in `spacex-api.service.ts`. When ever any router link is clicked spacex-api.service.ts file is trigger and return the value as observable, after that I subscribed it in dashboard component ts file and store in the variable that loop the spacex-card component.

Whenever any router link is click the `loading` state will activate. It will show until the api is loaded. After api loaded the loader will be removed and results will be displayed. And if there is no result I have displayed the message as `No data available`

Filter will work even if the page is refresh with particular filter in url.
URL format for filter: `https://spacexng.herokuapp.com/2010/1/all`

Route params 
 1st = launch Date (by default its all*)

 2nd = launch success (by default its all*)

 3rs = land success (by default its all*) land success filter is depend on launch success. if land success filter is applied the launch success will automatically be true.
 
 
 *all means the particular query params is not passed in API call.

spacex-card component is for showing data of each component. like image, launch year etc. Mission id is an array. if there is no data on mission id it will give message as no mission id.


Again Note: I do not find `launch_landing` attribute in the API as shown in your word doc. So can't be use in tempalte.


# Responsive.

The app is responsive using custom media query. Instead of mobile first I used it as Desktop first which is 4 column by default and 2 column on tablet and single column on mobile version.



# SSR
I have setup SSR in this project and tested locally with `npm run serve:ssr` this command which is working fine. I could see data when I do view source also I see many warning and unsual error code so I do not use it during build.


