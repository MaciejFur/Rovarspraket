function string(a)
{
  var userInput = prompt("Please enter a value:");
  var split = userInput.split("");
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'z', 'x', 'v'];
  var output = "";

  for(var i = 0; i < split.length; ++i)
    if (check(split[i], consonants))
      output += split[i] + "o" + split[i];
    else
      output += split[i];

  console.log(output);
}

function check(a, array)
{
  for (var j = 0; j < array.length; ++j)
    if (a == array[j])
      return 1;

  return 0;
}