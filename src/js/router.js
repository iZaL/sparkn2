import { createRouter } from '@exponent/ex-navigation';
import AlbumsContainer from './containers/albums';
import CalendarContainer from './containers/calendar';
import Intro from './components/intro';
import FeedContainer from './containers/feed';
import ProfileContainer from './containers/profile';
import Navbar from './components/navbar';

const Router = createRouter(() => ({
  intro: () => Intro,
  albums: () => AlbumsContainer,
  calendar: () => CalendarContainer,
  feed: () => FeedContainer,
  profile: () => ProfileContainer,
  navbar: () => Navbar
}));

export default Router;
