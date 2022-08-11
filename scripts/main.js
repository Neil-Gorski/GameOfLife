import { Matchfield } from "./matchfield.js";


const field = new Matchfield(20,20);
field.createField();
// field.checkFieldsAround();
// field.checkFieldLeft(0,0);
// field.checkFieldRight(0,19);
// field.checkFieldUp(0,0);
// field.checkFieldDown(0,0)
// field.checkFieldLeftUp(0,0)
// field.checkFieldRightUp(1,19)
// field.checkFieldLeftDown(19,1);
// field.checkFieldRightDown(19,19);
field.fieldLifeCycle()
// console.log(field.checkFieldLeft(0,1));
