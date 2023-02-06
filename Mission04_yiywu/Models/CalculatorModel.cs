using System.ComponentModel.DataAnnotations;

namespace Mission04_yiywu.Models
{
    //Get and set values from the calculatorModel also set requirments for the user
    public class CalculatorModel
    {
        [Range(0,100)]
        public int assignments1 { get; set; }
        [Range(0, 100)]
        public int groupProject1 { get; set; }
        [Range(0, 100)]
        public int quiz1 { get; set; }
        [Range(0, 100)]
        public int midtermExam1 { get; set; }
        [Range(0, 100)]
        public int finalExam1 { get; set; }
        [Range(0, 100)]
        public int intex1 { get; set; }


    }
}
