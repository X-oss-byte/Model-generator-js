import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Page } from './page';

/**
 * Generated by '@kontent-ai/model-generator@5.8.0'
 *
 * Homepage
 * Id: cc1bc18d-3e3e-4ee2-b871-f9903a794f9e
 * Codename: homepage
 */
export type Homepage = IContentItem<{
  /**
   * Content (modular_content)
   * Required: false
   * Id: e823aea0-6654-4d72-acfe-282d1bb52e9b
   * Codename: content
   */
  content: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Subpages (subpages)
   * Required: false
   * Id: a2bf46c9-4d56-4ca5-a86c-cc11ee035123
   * Codename: subpages
   */
  subpages: Elements.LinkedItemsElement<Page>;

  /**
   * Title (text)
   * Required: false
   * Id: dcc733f3-a67c-42ad-97df-5d50c0351b29
   * Codename: title
   */
  title: Elements.TextElement;
}>;
