namespace BS.Inventory.School.Models.DAL
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class InventorySchool : DbContext
    {
        public InventorySchool()
            : base("name=InventorySchool") {
        }


        protected override void OnModelCreating(DbModelBuilder modelBuilder) {
            //public virtual DbSet<Classroom> Classrooms { get; set; }
    }

        public System.Data.Entity.DbSet<BS.Inventory.School.Models.Classroom> Classrooms { get; set; }
    }
}
