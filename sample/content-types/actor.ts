import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Movie } from './movie';

/**
 * Generated by '@kontent-ai/model-generator@5.8.0'
 *
 * Actor
 * Id: 58099989-319f-495f-aa36-cb3710854e36
 * Codename: actor
 */
export type Actor = IContentItem<{
  /**
   * First name (text)
   * Required: false
   * Id: 14dd70e5-c42d-f111-9640-c82b443edf1d
   * Codename: first_name
   */
  firstName: Elements.TextElement;

  /**
   * Last name (text)
   * Required: false
   * Id: 9f7a0dd4-af3a-95ca-0358-400c14ce7075
   * Codename: last_name
   */
  lastName: Elements.TextElement;

  /**
   * Pages (subpages)
   * Required: false
   * Id: af3b152b-6c98-479e-937c-b68b562994b8
   * Codename: pages
   */
  pages: Elements.LinkedItemsElement<Movie>;

  /**
   * Photo (asset)
   * Required: false
   * Id: eaec9ba3-9624-6875-04ec-80d0b2e00781
   * Codename: photo
   */
  photo: Elements.AssetsElement;

  /**
   * Url (url_slug)
   * Required: false
   * Id: c8658782-f209-a573-9c85-430fb4e3e9f0
   * Codename: url
   */
  url: Elements.UrlSlugElement;
}>;
