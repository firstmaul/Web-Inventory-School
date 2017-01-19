using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace BS.Inventory.School.Models
{
    public class Classroom
    {
        [Key]        
        public int ClassroomID { get; set; }

        [StringLength(60)]
        public string Name { get; set; }
        public decimal Long { get; set; }
        public decimal Width { get; set; }


    }
}