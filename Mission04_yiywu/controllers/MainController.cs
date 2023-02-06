using Microsoft.AspNetCore.Mvc;
using Mission04_yiywu.Models;
using System;

namespace Mission04_yiywu.controllers
{
    //controller to dictate what the different pages do
    public class MainController : Controller
    {
        public IActionResult Index()
        {
            return View();

        }
        //get values from calculator.cshtml
        [HttpGet]
        public IActionResult Calculator()
        {
            return View();
        }
        //post values from calculator.cshtml
        [HttpPost]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();
        }
    }
}
