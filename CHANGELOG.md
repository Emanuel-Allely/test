# Change Log

## [1.2.1] 2022-08-15

- Fixed the issues
- Updated dependencies
- Migration to React 18
- Migration to sass from node-sass

## [1.2.0] 2021-05-14

### Bug fixing

- Moved all images inside `public` folder (i.e. moved from `assets/img` to `public/img`)
- https://github.com/creativetimofficial/ct-nextjs-material-kit-pro/issues/11

### Major style changes

- Moved all of the styles inside `styles` folder (i.e. moved from `assets/scss`, `assets/css`, `assets/jss` to `styles/scss`, `styles/css` and `styles/jss`)

### Deleted components

### Added components

### Deleted dependencies

- `@zeit/next-sass` (SCSS will not be imported with the built-in support of NextJS)
- `@zeit/next-css` (CSS will not be imported with the built-in support of NextJS)
- `react-swipeable-views` (not event Material-UI use it anymore)
- `react-google-maps` (replaced with simple Google Maps API since it was no longer maintained)
- `@types/googlemaps`
- `@types/markerclustererplus`

### Added dependencies

### Updated dependencies

```
@material-ui/core       4.9.12   →   4.11.4
@material-ui/icons       4.9.1   →   4.11.2
animate.css              3.7.2   →    4.1.1
classnames               2.2.6   →    2.3.1
moment                  2.24.0   →   2.29.1
next                     9.3.6   →   10.2.0
next-compose-plugins     2.2.0   →    2.2.1
next-images              1.3.1   →    1.7.0
node-sass               4.14.0   →    5.0.0
nouislider              14.2.0   →   15.1.0
react                  16.13.1   →   17.0.2
react-datetime          2.16.3   →    3.0.4
react-dom              16.13.1   →   17.0.2
react-image-gallery      1.0.7   →    1.0.9
react-slick             0.25.2   →   0.28.1
webpack                 4.43.0   →   4.46.0
```

### Warning

_We could not update webpack past version 4 and node-sass past version 5 due to some warnings from NextJS._
_The following warnings come from some of our dependencies, however they do not affect the UI or the functionality of the product - we are thinking of dropping their usage and replace with other dependencies:_

```
npm WARN react-animate-on-scroll@2.1.5 requires a peer of react@>= 15.4.1 < 17.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN react-datetime@3.0.4 requires a peer of react@^16.5.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-tagsinput@3.19.0 requires a peer of react@^16.0.0 || ^15.0.0 || ^0.14.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-swipeable@5.5.1 requires a peer of react@^16.0.0-0 but none is installed. You must install peer dependencies yourself.
```

### [1.1.0] 2020-05-01

### Bug fixing

- https://github.com/creativetimofficial/ct-nextjs-material-kit-pro/issues/7
- https://github.com/creativetimofficial/ct-nextjs-material-kit-pro/issues/6
- https://github.com/creativetimofficial/ct-nextjs-material-kit-pro/issues/5
- https://github.com/creativetimofficial/ct-nextjs-material-kit-pro/issues/3
- https://github.com/creativetimofficial/ct-nextjs-material-kit-pro/issues/2

### Major style changes

- `assets/scss/plugins/_plugin-react-image-gallery.scss`
- `assets/jss/nextjs-material-kit-pro/pages/productStyle.js`
- `assets/jss/nextjs-material-kit-pro/components/customDropdownStyle.js`

### Deleted components

### Added components

- Add `pages/404.js` to stop NextJS warning of not having a 404 page

### Deleted dependencies

### Added dependencies

### Updated dependencies

```
@material-ui/core        4.3.2   →    4.9.12
@material-ui/icons       4.2.1   →     4.9.1
next                     9.0.5   →     9.3.6
next-images              1.1.2   →     1.3.1
node-sass               4.12.0   →    4.14.0
nouislider              14.0.2   →    14.2.0
react                   16.9.0   →   16.13.1
react-dom               16.9.0   →   16.13.1
react-image-gallery     0.8.18   →     1.0.7
react-swipeable-views   0.13.3   →    0.13.9
webpack                 4.40.2   →    4.43.0
@types/googlemaps       3.37.6   →    3.39.4
```

### Warning

_The following warnings come from some of our dependencies, however they do not affect the UI or the functionality of the product - if the issues will perssit and will change into errors in the next version of React (v17), we will drop their usage and replace with other dependencies:_

```
npm WARN deprecated popper.js@1.16.1: Popper changed home, find its new releases at @popperjs/core
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated mkdirp@0.5.3: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
```

_The following dependencies raise warnings (of deprecation or renamed) in develpment mode: Component, DateTime, ReactSwipableView, TagsInput, withGoogleMap(Component), withScriptjs(withGoogleMap(Component)). If the warnings will perssit, and will become errors in React 17, we will drop their usage and replace them with other plugins._

## [1.0.0] 2019-09-23

### Original Release

- Started project with NextJS
- Added Material-UI as base framework
- Added React Hooks
- Added design from Material Kit PRO React by Creative Tim
