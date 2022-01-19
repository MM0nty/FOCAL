const raisinAlarm = function(cookie)
{
  let result = 0;
  cookie.forEach(element =>
    {
    if (element === "🍇")
      {
        result ++;
      }
    });
    if (result !== 0)
    {
      return 'Raisin alert!';
    }
    else
    {
      return 'All good!';
    }
  };
  
  console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
  console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
  console.log(raisinAlarm(["🍫", "🍫", "🍫"])); 

/*
const raisinAlarm = function(cookie)
{
  // Put your solution here
  let raisins = 0;
  for (i = 0; i < cookie.length; i++)
  {
    if (cookie[i] === "🍇")
    {
      raisins++;
    }
  }
  if (raisins > 0)
  {
    console.log("Raisin Alert!");
  }
  else
  {
    console.log("All good!");
  }
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
*/