using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_Commerce.Controllers
{
    public class AccountController : Controller
    {
        /*[Route("Account/Index")]*/
        public IActionResult Index()
        {
            return View();
        }
        [Route("Account/singup/")]
        public IActionResult singup()
        {
            return View();
        }
    }
}
