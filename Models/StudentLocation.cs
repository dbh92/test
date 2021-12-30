using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class StudentLocation
    {
        public int IdAddress { get; set; }
        public string NameAddress { get; set; }
        public int ParentId { get; set; }
        public int LevelAddress { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedUser { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedUser { get; set; }
    }
}