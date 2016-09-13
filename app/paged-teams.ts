import {Team} from './team';
import {Page} from './page';
import {Link} from './link';

export class PagedTeams {
  links: Link[];
  content: Team[];
  page: Page;
}
