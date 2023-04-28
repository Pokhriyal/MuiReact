import { Post } from './types';

const routes = {
  posts: () => '/posts',
  post: (postId: Post['id']) => `/posts/${postId}`,
  detailsAndBranding: () => '/details-and-branding',
  subscriptionAndBilling: () => '/subscription-and-billing',
  employees: () => '/employees',
  serviceMenu: () => '/service-menu',
  serviceSchedule: () => '/service-schedule',
  liveDataProgram: () => '/live-data-program',
  gearsForFears: (location = '') => `/gears-for-fears/${location}`,
};

export default routes;
