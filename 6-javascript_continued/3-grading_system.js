let my_parameter = process.argv[2];
let a = my_parameter

if( a > 94) {
  console.log("You received an A+")
}
else if( a > 89 )
{
  console.log("You received an A");
}
else if( a > 84 )
{
 console.log("You received a B+");
}
else if( a > 79 )
{
 console.log("You received a C+");
}
else if( a < 74 )
{
 console.log("You received a C");
}
else if( a < 66 )
{
 console.log("You received a D");
}
