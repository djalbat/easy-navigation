"use strict";

export function guaranteeArray(arrayOrElement) {
  const array  = Array.isArray(arrayOrElement) ?
                   arrayOrElement :
                    [ arrayOrElement ];

  return array;
}
