var percents = ["100","95","90","85","80","75","70","65","60",
                "55","50","0"];

var grades = ["65.95", "56.98", "78.62", "96.1","90.3", "72.24", "92.34", "60.00", "81.43", "86.22", "88.33", "9.03",
              "49.93", "52.34", "53.11", "50.10", "88.88", "55.32", "55.69", "61.68", "70.44", "70.54", "90.0", "71.11", "80.01"];
var counter = [1,3,3,2,1,4,1,2,3,3,2];

function myFunction(e)
{
  var mynumber = parseInt(e.target.value,10);
  goodValue = true;

  if(mynumber<"0"||mynumber>"100"||isNaN(mynumber))
  {
    alert("ERROR: Enter a positive integer from 0-100!");
    goodValue = false;
  }
  else
  {
    for(i=0;i< percents.length;i++)
      if(mynumber==parseInt(percents[i]))
      {
        alert("ERROR : This integer already exist!");
        goodValue = false
      }
  }

  if(goodValue) calculate(e);

}
get
function checkEnter(e)
{
//  myFunction();

  if(e.keyCode==13)
  {

    e.preventDefault()
    myFunction(e);
  }
}

function calculate(e)
{
  var theName = e.target.name;
  switch(theName)
  {
    case '0': percents[0] = parseInt(e.target.value); break;
    case '1': percents[1] = parseInt(e.target.value); break;
    case '2': percents[2] = parseInt(e.target.value); break;
    case '3': percents[3] = parseInt(e.target.value); break;
    case '4': percents[4] = parseInt(e.target.value); break;
    case '5': percents[5] = parseInt(e.target.value); break;
    case '6': percents[6] = parseInt(e.target.value); break;
    case '7': percents[7] = parseInt(e.target.value); break;
    case '8': percents[8] = parseInt(e.target.value); break;
    case '9': percents[9] = parseInt(e.target.value); break;
    case '10': percents[10] = parseInt(e.target.value); break;
    case '11': percents[11] = parseInt(e.target.value); break;
    default: break;
  }



  for(j=0;j<counter.length;j++)
  {
    counter[j]=0;
  }

  for(i=0; i<grades.length; i++)
  {
    //alert(grades[i]);
    if(parseInt(grades[i])<percents[0]&&parseInt(grades[i])>=percents[1]) counter[0]++;  //100 - 95
    else if(parseInt(grades[i])<percents[1]&&parseInt(grades[i])>=percents[2]) counter[1]++; //95 -90
    else if(parseInt(grades[i])<percents[2]&&parseInt(grades[i])>=percents[3]) counter[2]++;  //90 - 85
    else if(parseInt(grades[i])<percents[3]&&parseInt(grades[i])>=percents[4]) counter[3]++;  //85 -80
    else if(parseInt(grades[i])<percents[4]&&parseInt(grades[i])>=percents[5]) counter[4]++; // 80 - 75
    else if(parseInt(grades[i])<percents[5]&&parseInt(grades[i])>=percents[6]) counter[5]++;  //75 - 70
    else if(parseInt(grades[i])<percents[6]&&parseInt(grades[i])>=percents[7]) counter[6]++; // 70- 65
    else if(parseInt(grades[i])<percents[7]&&parseInt(grades[i])>=percents[8]) counter[7]++; // 65 -60
    else if(parseInt(grades[i])<percents[8]&&parseInt(grades[i])>=percents[9]) counter[8]++; //60 - 55
    else if(parseInt(grades[i])<percents[9]&&parseInt(grades[i])>=percents[10]) counter[9]++; //55 - 50
    else if(parseInt(grades[i])<percents[10]&&parseInt(grades[i])>=percents[11]) counter[10]++; //50 - 0

  }

  for(i=0; i<counter.length; i++)
  {
    switch(i)
    {
      case 0: document.getElementById('A+').innerHTML = counter[0]; break;
      case 1: document.getElementById('A').innerHTML = counter[1]; break;
      case 2: document.getElementById('A-').innerHTML = counter[2]; break;
      case 3: document.getElementById('B+').innerHTML = counter[3]; break;
      case 4: document.getElementById('B').innerHTML = counter[4]; break;
      case 5: document.getElementById('B-').innerHTML = counter[5]; break;
      case 6: document.getElementById('C+').innerHTML = counter[6]; break;
      case 7: document.getElementById('C').innerHTML = counter[7]; break;
      case 8: document.getElementById('C-').innerHTML = counter[8]; break;
      case 9: document.getElementById('D').innerHTML = counter[9]; break;
      case 10: document.getElementById('F').innerHTML = counter[10]; break;
      default: break;

    }
  }

}
