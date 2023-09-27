
import OurFriends from '../Components/OurFriends/our_friends';

export const createSet= (set, data) =>{
      for(let i=0; i< 3; i++){
        const randomIndex= Math.floor(Math.random() * data.length);
        set.indexOf(randomIndex)!==-1?
        i--:set.push(randomIndex);
      
      }
      };

export const createSetPast = (set, data ) =>{
  const setPast=[];
  for(let i=0; i< 3; i++){
    const randomAnotherIndex= Math.floor(Math.random() * data.length);
    if(set.indexOf(randomAnotherIndex)!==-1){
      i--;
    }else{
      setPast.indexOf(randomAnotherIndex)!==-1?
      i--:setPast.push(randomAnotherIndex);
    }  
  
  }
  return setPast;
};
export const createSetNext = (set, data ) =>{
  const setNext=[];
  for(let i=0; i< 3; i++){
    const randomAnotherIndex= Math.floor(Math.random() * data.length);
    if(set.indexOf(randomAnotherIndex)!==-1){
      i--;
    }else{
      setNext.indexOf(randomAnotherIndex)!==-1?
      i--:setNext.push(randomAnotherIndex);
    }  
  
  }
  return setNext;
};

