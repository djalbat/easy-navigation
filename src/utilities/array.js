"use strict";

export function guaranteeArray(arrayOrElement) {
  const array  = (arrayOrElement instanceof Array) ?
                    arrayOrElement :
                      [ arrayOrElement ];

  return array;
}
