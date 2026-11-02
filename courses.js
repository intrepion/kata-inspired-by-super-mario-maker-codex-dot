import {blank} from './rules.js';

function base(name, finish=20){const c=blank();c.name=name;c.tiles[15][76]='empty';c.tiles[15][finish]='goal';return c;}
function put(c,t,coords){for(const [x,y] of coords)c.tiles[y][x]=t;}
function make(){
  const a=base('1 · First Steps',12);
  const b=base('2 · Jump and Gather',20);put(b,'coin',[[6,14],[7,14]]);put(b,'spike',[[11,15]]);put(b,'platform',[[15,13],[16,13]]);
  const c=base('3 · Bounce and Beetles',22);put(c,'spring',[[7,15]]);put(c,'beetle',[[15,15]]);put(c,'checkpoint',[[11,15]]);
  const d=base('4 · Bloom Workshop',22);put(d,'bloom',[[5,15]]);put(d,'brick',[[9,13]]);put(d,'seedblock',[[13,13]]);put(d,'spike',[[17,15]]);
  const e=base('5 · Gates and Keys',25);put(e,'switch',[[6,13]]);put(e,'gateRed',[[10,15]]);put(e,'gateBlue',[[15,13]]);put(e,'key',[[18,15]]);put(e,'lock',[[21,15]]);
  const f=base('6 · Foundry Finale',38);put(f,'coin',[[4,15]]);put(f,'bloom',[[6,15]]);put(f,'brick',[[9,13]]);put(f,'seedblock',[[12,13]]);put(f,'spike',[[15,15]]);put(f,'checkpoint',[[17,15]]);put(f,'spring',[[19,15]]);put(f,'platform',[[22,13],[23,13]]);put(f,'beetle',[[26,15]]);put(f,'switch',[[29,13]]);put(f,'gateRed',[[31,15]]);put(f,'gateBlue',[[33,13]]);put(f,'key',[[34,15]]);put(f,'lock',[[36,15]]);
  return [a,b,c,d,e,f];
}
export const FINAL_OBJECTIVES=['coin','bloom','brick','seedblock','spike','checkpoint','spring','platform','beetle','switch','gateRed','gateBlue','key','lock'];
export const OBJECTIVE_LABELS={coin:'collect a sunseed',bloom:'collect a bloom',brick:'break a block',seedblock:'hit a seed block',spike:'touch thorns while shielded',checkpoint:'activate the checkpoint',spring:'bounce on a spring',platform:'land on a platform',beetle:'stomp a beetle',switch:'hit a switch',gateRed:'pass an open coral gate',gateBlue:'pass an open blue gate',key:'collect a key',lock:'open a lock'};
export function lessons(){return make();}
