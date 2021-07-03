

function testNull() {
let inta = 1
  let b = !inta
  let c = !b
  if (1){
  console.log('b = ' + Number(b))
  }
  if (0){
  console.log('c = ' + Number(c))
  }


  let date1 = new Date("1965-02-01T00:00:00")
  let dateStr = date1.toDateString()
  console.log(date1)
  console.log(dateStr)


  let a = {}
  a.b = undefined
  a.c = null
  a.d = false
  // let d = a.b || 'null || 输出可以'
  console.log(a.d?'true':'false')
    if (a.b){
      console.log('b')
    }
    if (a.c){
      console.log('c')
    }
    if (Boolean(a.b)){
      console.log('bool a')
    }
    if (Boolean(a.c)){
      console.log('bool c')
    }
    if (a.b && a.b.x){
      console.log('bool x')
    }
  console.log(Boolean(a.b))
  console.log(Boolean(a.c))
  console.log('aaa')
}

class A {
  constructor(b,c) {
    this.b = b
    this.c = c
  }
}

function testObject(){
  var json = {
    "string":"string",
    "int":1,
  }
  var json2 = {
    string:"string",
    int:1,
  }
  var a = new A(json)
  // let obj = JSON.parse(json)
  console.log(typeof json)
  console.log(typeof json2)
  console.log(a.b)
  console.log(a.c)
}

testNull()

