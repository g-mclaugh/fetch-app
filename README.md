# FetchApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Information about the app

Rather than implenting a proper auth guard, the app will redirect you to login if any request throws a 401.

Upon successful login, you will be brought to the search page, where you can see a list of dogs. You can sort by name, age, zip code, and breed.

Additionally, at the top, you can filter by breed as well.

Hovering over a dog will enlarge its picture to make it a little easier to see.

You can select any number of dogs which will be added as chips underneath the `Match` button, which you can clear at any time. As long as one dog has been selected, you can click on the `Match` button and be shown a dialog window indicating your match. Clicking the "adopt" button will close the dialog and show a snackbar message.

On smaller screen sizes, to conserve screen space, the age and zip code columns go away. The app functions as normal.

## Not included

- Full responsiveness (there is not a separate template displayed per device size)
- Unit testing (not enough time, also not my strong suit)
- API error handling (not enough time, but more than happy to discuss and show on the phone screen how I would add error handling to improve the app)
