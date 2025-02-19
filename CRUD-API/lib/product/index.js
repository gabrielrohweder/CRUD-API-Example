'use strict';
/*Created by BJ Rutledge
 * 2023-09-17
 */

class Product {
   /**Default minimum markup. */
   MIN_MARKUP = 1.5;
   /**
    * Simple product class.
    * @param {number} productNumber Customer number
    * @param {number} cost Cost of item
    * @param {number} markup Markup as percentage. If markup is below 1.5, the markup will be set to the default of 1.5
    * @param {number} listPrice List price of product
    * @param {boolean} sellAtList Sets price to list if sell at list is true.
    * @param {string} productName Name of product
    * @param {string} productDescription Description of product.
    */
   constructor(
      productNumber,
      cost,
      markup,
      listPrice,
      sellAtList,
      productName,
      productDescription
   ) {
      if (
         typeof productNumber == 'number' &&
         typeof cost == 'number' &&
         typeof markup == 'number' &&
         typeof sellAtList == 'boolean' &&
         typeof productName == 'string' &&
         typeof productDescription == 'string'
      ) {
         this.number = productNumber;
         this.cost = cost;
         this.markup = markup >= this.MIN_MARKUP ? markup : this.MIN_MARKUP;
         this.listPrice = listPrice;
         this.sellAtList = sellAtList;
         this.productName = productName;
         this.productDescription = productDescription;
      } else {
         console.error(
            'Invalid arguments.',
            productNumber,
            cost,
            markup,
            listPrice,
            sellAtList,
            productName,
            productDescription
         );
      }
   }
   /** Customer price of product. If sellAtList is set to true, price will be list, otherwise,
    * it will be calculated cost * markup.
    */
   get price() {
      return this.sellAtList ? this.listPrice : this.cost * this.markup;
   }
}

module.exports = Product;
