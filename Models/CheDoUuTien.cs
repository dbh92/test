using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class CheDoUuTien
    {
        public int iduutien { get; set; }
        public string tenuutien { get; set; }
        public int parentId { get; set; }
    }
}