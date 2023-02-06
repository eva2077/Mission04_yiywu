using Microsoft.AspNetCore.Mvc;
using Mission04_yiywu.Models;
using System;

namespace Mission04_yiywu.controllers
{
    public class MainController : Controller
    {
        public IActionResult Index()
        {

          
            return View();
        }
        [HttpGet]
        public IActionResult Calculator ()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();
        }
    }
}
