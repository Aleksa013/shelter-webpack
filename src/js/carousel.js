import OurFriends from '../Components/OurFriends/our_friends';
import pets from '../pets.json';


const setNow =[],
      setNext =[],
      setPast=[];


      const createSet= (set) =>{
      for(let i=0; i< 3; i++){
        const randomIndex= Math.floor(Math.random() * pets.length);
        set.indexOf(randomIndex)!==-1?
        i--:set.push(randomIndex);
      
      }
      };
      createSet(setNow);
      createSet(setPast);
      console.log(setNow , setPast, pets);

export default createSet;