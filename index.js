class Student{
  constructor(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }
  fullName(){
    return `Your full name is ${this.fullname} ${this.lastname}`
  }
  static enrollStudent(...students){
    return "Enroll students"
  }
}

const student = new Student();
// console.log(Student.enrollStudent())



class Practice{
  constructor(email,password,cl){
    this.cl = cl
    this.email = email;
    this.password = password;
    this.active = true;
    this._uid = 'dsagadsadsasdgads'

    return new Proxy(this, {
      get(target,key){
        if(typeof key === 'string' && key.startsWith("_")) return 'this is a private variable'
        return target[key];
      }
    })
  }

  login(){
    this.active = true;
    return this.active;
  }

  logout(){
    this.active = false;
    return this.active;
  }

  changeIdentity(){
      this._uid = 'wertwtqweqwetqew'
  }

  static checkStatus(...users){
    return users.every(value => value === true)
  }

}


const abc = new Practice('s','adsfadsads')
const abe = new Practice('sdsafds','adsfadsads')
const answer1 = abc.login();
const answer2 = abe.login();
abe.changeIdentity();




console.log(Practice.checkStatus(answer1,answer2))
