using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApp1.Models;

namespace WebApp1.Controllers
{
    public class ModelsController : ApiController
    {
        public static List<Model> _models = new List<Model>();

        public ModelsController() 
        {
            if (_models.Count == 0)
            {
                for (var i = 0; i < 5; i++) {
                    var m = new Model()
                    {
                        ModelId = i,
                        Name = "Model "+i.ToString()
                    };

                    _models.Add(m);
                }
            }
        }
        

        // GET api/product
        public IEnumerable<Model> Get()
        {
            return _models.ToArray();
        }
    }
}


