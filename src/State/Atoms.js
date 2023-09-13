import {
     atom,
 
  } from 'recoil';



  const basicDetailsAtom = atom({
    key:'basicDetailsAtom',
default:{email:''}
 });


  const workExperienceAtom = atom({ key:'workExperienceAtom',default:[] });

  const EducationAtom = atom(  {key:'EducationAtom',default:[]});
  const skillAtom = atom(  {key:'skillAtom',default:[]});
  const projectAtom = atom(  {key:'projectAtom',default:[]});

  export {basicDetailsAtom,workExperienceAtom,EducationAtom,skillAtom,projectAtom};
  