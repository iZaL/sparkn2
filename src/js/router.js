import { createRouter } from '@exponent/ex-navigation';
import Intro from './components/intro';
import AlbumsContainer from './containers/albums';
import CalendarContainer from './containers/calendar';
import FeedContainer from './containers/feed';
import ProfileContainer from './containers/profile';
import DetailsContainer from './containers/create/details';
import WhatContainer from './containers/create/what';
import WhereContainer from './containers/create/where';
import WhenContainer from './containers/create/when';
import Navbar from './components/navbar';

const Router = createRouter(() => ({
  intro: () => Intro,
  albums: () => AlbumsContainer,
  calendar: () => CalendarContainer,
  feed: () => FeedContainer,
  profile: () => ProfileContainer,
  navbar: () => Navbar,
  details: () => DetailsContainer,
  what: () => WhatContainer,
  where: () => WhereContainer,
  when: () => WhenContainer
}));

export default Router;
