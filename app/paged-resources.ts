import {Resource} from './resource';
import {Page} from './page';
import {Link} from './link';

export class PagedResources {
  links: Link[];
  content: Resource[];
  page: Page;
}
