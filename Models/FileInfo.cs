using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class FileInfo
    {
        public int IdFile { get; set; }
        public string UrlFile { get; set; }
        public string NameFile { get; set; }
        public string SizeFile { get; set; }
        public string ExtFile { get; set; }
    }
}