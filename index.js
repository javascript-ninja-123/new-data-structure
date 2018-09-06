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
  constructor(email,password,cl,newObj){
    this.cl = cl
    this.email = email;
    this.password = password;
    this.active = true;
    this.newObj = newObj;
    this.releasePrivate = false;
    this._uid = 'dsagadsadsasdgads'

    return new Proxy(this, {
      get(target,key){
        if(key.startsWith("_") && !target['releasePrivate']) return 'this is a private variable'
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
      return 'worked well'
  }

  releaseData(fn){
    this.releasePrivate = true;
    fn();
    this.releasePrivate = false;
  }

  transferUIdData(){
    this.releaseData(() => this.newObj[0] = this._uid)
    return 'worked'
  }

  static checkStatus(...users){
    return users.every(value => value === true)
  }

}

const ass = {}
const abe = new Practice('sdsafds','adsfadsads')
const abc = new Practice('s','adsfadsads',abe,ass)
const answer1 = abc.login();
const answer2 = abe.login();
const bbc = abe.changeIdentity();
const ccc = abc.transferUIdData()
console.log(ccc)
console.log(ass)
console.log(abc._uid)




// console.log(Practice.checkStatus(answer1,answer2))



//LinkedList
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  first(newNode){
    this.head = newNode;
    this.tail = newNode;
    return this;
  }
  push(val){
    this.length +=1;
    const newNode = new Node(val);
    if(!this.head){
      this.head = new Node(val);
      this.tail = new Node(val);
      this.head.next = new Node(val)
      return;
    }
    const preTail = this.tail;
    this.tail = newNode;
    preTail.next = newNode;
    return this;
  }
  pop(){
    this.length--;

    if(this.length < 0){
      return undefined;
    }
    else{
      const findVal = this.tail.val;
      this.tail = null;
      if(this.length === 0){
        this.tail = null;
        this.head = null;
        return this;
      }
      if(this.length === 1){
        this.tail = new Node(this.head.val);
        this.head.next = this.tail;
        return this;
      }
      const recurse = (tempHead, length) => {
        if(length === 0)return this;
        if(tempHead.next.val === findVal){
          tempHead.next = null;
          this.tail = tempHead;
          return this;
        }
        return recurse(tempHead.next,length - 1)
      }

      return recurse(this.head,this.length)
    }
  }
  unshift(val){
    this.length += 1;
    const newNode = new Node(val);
    if(!this.tail){
      this.head = new Node(val);
      this.tail = new Node(val);
      this.head.next = this.tail;
      return;
    }
    const preHead = this.head;
    this.head = newNode;
    newNode.next = preHead;
    return this;
  }
  shift(){
    this.length--
    if(this.length <0){
      return undefined
    }
    if(this.length === 0){
      this.tail = null;
      this.head = null;
      return this;
    }
    if(this.length === 1){
      this.head = new Node(this.tail.val);
      this.head.next = this.tail;
      return this;
    }
    this.head = this.head.next
    return this;
  }
}

const list = new SinglyLinkedList()

list.unshift(4)
list.unshift(3)
list.unshift(2)
list.unshift(1)
list.shift();
list.shift();
list.shift();
console.log(list)
