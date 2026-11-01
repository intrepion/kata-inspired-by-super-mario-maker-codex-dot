import test from 'node:test';import assert from 'node:assert/strict';import {blank,example,validate,place,solid,overlap,find} from '../rules.js';
test('example and blank courses validate',()=>{for(const c of [blank(),example()])assert.deepEqual(validate(c),c);});
test('validation rejects malformed and unknown tiles',()=>{assert.throws(()=>validate({}));let c=blank();c.tiles[0][0]='script';assert.throws(()=>validate(c));});
test('start and goal remain unique and protected',()=>{let c=blank();assert.equal(place(c,2,15,'empty'),false);place(c,5,12,'start');assert.equal(c.tiles.flat().filter(t=>t==='start').length,1);assert.deepEqual(find(c,'start'),{x:165,y:387});assert.equal(place(c,76,15,'start'),false);validate(c);});
test('placing outside the board has no effect',()=>{let c=blank();assert.equal(place(c,-1,0,'brick'),false);assert.equal(place(c,80,0,'brick'),false);});
test('solid classification and bounding boxes',()=>{assert.ok(solid('ground'));assert.ok(solid('brick'));assert.ok(!solid('coin'));assert.ok(overlap({x:0,y:0,w:10,h:10},{x:9,y:9,w:10,h:10}));assert.ok(!overlap({x:0,y:0,w:10,h:10},{x:10,y:0,w:10,h:10}));});
test('validation clones data and rejects absent finish',()=>{let c=blank(),copy=validate(c);copy.tiles[0][0]='brick';assert.equal(c.tiles[0][0],'empty');c.tiles[15][76]='empty';assert.throws(()=>validate(c));});
