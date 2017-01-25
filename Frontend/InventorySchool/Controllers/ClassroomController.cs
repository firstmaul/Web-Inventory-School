using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace InventorySchool.Controllers
{
    public class ClassroomController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            ViewData["Message"] = "Daftar ruang kelas";
            return View();
        }

        public IActionResult Create() {
            ViewData["Message"] = "Inventaris Baru";
            return View();
        }
        
        public IActionResult Edit() {
            ViewData["Message"] = "Edit Inventaris";
            return View();
        }

    }
}
