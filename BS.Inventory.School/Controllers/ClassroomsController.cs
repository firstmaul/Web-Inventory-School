using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BS.Inventory.School.Models;
using BS.Inventory.School.Models.DAL;
using System.Web.Mvc;

namespace BS.Inventory.School.Controllers
{
    public class ClassroomsController : Controller
    {
        //private InventorySchool db = new InventorySchool();

        //// GET: api/Classrooms
        //public IQueryable<Classroom> GetClassrooms()
        //{
        //    return db.Classrooms;
        //}

        //// GET: api/Classrooms/5
        //[ResponseType(typeof(Classroom))]
        //public IHttpActionResult GetClassroom(int id)
        //{
        //    Classroom classroom = db.Classrooms.Find(id);
        //    if (classroom == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(classroom);
        //}

        //// PUT: api/Classrooms/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutClassroom(int id, Classroom classroom)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != classroom.ClassroomID)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(classroom).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ClassroomExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// POST: api/Classrooms
        //[ResponseType(typeof(Classroom))]
        //public IHttpActionResult PostClassroom(Classroom classroom)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Classrooms.Add(classroom);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = classroom.ClassroomID }, classroom);
        //}

        //// DELETE: api/Classrooms/5
        //[ResponseType(typeof(Classroom))]
        //public IHttpActionResult DeleteClassroom(int id)
        //{
        //    Classroom classroom = db.Classrooms.Find(id);
        //    if (classroom == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Classrooms.Remove(classroom);
        //    db.SaveChanges();

        //    return Ok(classroom);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool ClassroomExists(int id)
        //{
        //    return db.Classrooms.Count(e => e.ClassroomID == id) > 0;
        //}

        public ActionResult Index() {
            return View();
        }

    }
}