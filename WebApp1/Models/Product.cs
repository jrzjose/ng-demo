using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp1.Models
{
    public class Product
    {
        public Guid ProductID { get; set; }
        public string ProductNumber {get; set;}
        public string Name { get; set; }
        public string Color { get; set; }
        public double ListPrice {get; set;}
        public string Weight {get; set;}
        public char Style {get; set;}
                    //W = Women's
                    //M = Men's
                    //U = Universal
        public int ProductModelID {get; set;}
    }
}