using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApp1.Models;

namespace WebApp1.Controllers
{
    public class ProductsController : ApiController
    {
        public static Dictionary<Guid, Product> _products = new Dictionary<Guid, Product>();

        public ProductsController() 
        {
            if (_products.Count == 0) {
                for (var i = 0; i < 5; i++) {
                    var p = new Product()
                    {
                        ProductID = Guid.NewGuid(),
                        Color = "Red",
                        Name = "Product "+i.ToString(),
                        ListPrice = 120.00,
                        ProductModelID = i,
                        ProductNumber = "101012-1012255",
                        Weight = "10kg",
                        Style = 'U'
                    };

                    _products.Add(p.ProductID, p);
                }
            }
        }
        

        // GET api/product
        public IEnumerable<KeyValuePair<Guid, Product>> Get()
        {
            return _products.ToArray();
        }

        // GET api/product/5
        public KeyValuePair<Guid, Product> Get(Guid productID)
        {
            return _products.Where(i => i.Key == productID).FirstOrDefault();
        }

        // POST api/product
        public Guid Post(Product product)
        {
            product.ProductID = Guid.NewGuid();
            _products.Add(product.ProductID, product);
            return product.ProductID;
        }


        // PUT api/product/5
        public void Put(Guid id, Product product)
        {
            _products[id] = product;
        }

        // DELETE api/product/5
        public void Delete(Guid productID)
        {
            _products.Remove(productID);
        }
    }
}


