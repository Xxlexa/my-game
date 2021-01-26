class Dribble{
constructor(bodyA, bodyB)
{
   var options ={ 
    
    bodyA : bodyA,
    bodyB : bodyB,
    length : 50,
    stiffness : 0.05 
 }

this.dribble = Constraint.create(options);
World.add(world,this.dribble);



}
















}