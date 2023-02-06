using System.ComponentModel.DataAnnotations;

namespace Mission04_yiywu.Models
{
    public class CalculatorModel
    {
        [Required]
        public float assignments1 { get; set; }
        public float groupProject1 { get; set; }
        public float quiz1 { get; set; }
        public float midtermExam1 { get; set; }
        public float finalExam1 { get; set; }
        public float intex1 { get; set; }


    }
}
