
import OurFriends from '../Components/OurFriends/our_friends';

export const createSet= (set, data) =>{
      for(let i=0; i< 3; i++){
        const randomIndex= Math.floor(Math.random() * data.length);
        set.indexOf(randomIndex)!==-1?
        i--:set.push(randomIndex);
      
      }
      };

export const createAnotherSet = (anotherSet,set, data ) =>{
  for(let i=0; i< 3; i++){
    const randomIndex= Math.floor(Math.random() * data.length);
    anotherSet.indexOf(randomIndex)!==-1?
    i--:set.push(randomIndex);

    set.indexOf(randomIndex)!==-1?
    i--:set.push(randomIndex);
  
  }
};

