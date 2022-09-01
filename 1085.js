const fs = require("fs");
const input = require('fs').readFileSync('./1085.txt').toString().trim()

const coordinate = input.split(' ')

const y0 = 0 // 0.0 좌표
const y1 = coordinate[1] // 현재 y좌표
const y2 = coordinate[3] // 꼭지점 y좌표

const x0 = 0 // 0,0 좌표
const x1 = coordinate[0] // 현재 x좌표
const x2 = coordinate[2] // 꼭지점 x좌표

const yMinValue = Math.min(y2-y1 , y1-y0)
const xMinValue = Math.min(x2-x1, x1-x0)

const result = (xMinValue < yMinValue ) ? xMinValue : yMinValue

console.log( result)