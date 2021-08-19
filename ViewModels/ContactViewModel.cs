using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebpackMvc.ViewModels
{
    public class ContactViewModel
    {
        [Required]
        [StringLength(30, MinimumLength = 3)]
        public string Subject { get; set; }

        [Required(ErrorMessage = "Please enter a message.")]
        public string Message { get; set; }
    }
}
