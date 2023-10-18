
import OurFriends from '../Components/OurFriends/our_friends';



const pets = [{},{},{},{}]
const createSet =(set, data)=>{
for(let i =0;  i < 3; i++){
  const num = Math.floor(Math.random()*data.length);
  console.log(num)
set.indexOf(num)== -1?
set.push(num):
i--;
}

return set;
}

const set = [];
console.log(createSet(set,pets ));

export default createSet;
