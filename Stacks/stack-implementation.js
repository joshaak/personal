class Stack {
  constructor() {
    this.stack = [];
  }
  size() {
    return this.stack.length;
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "stack is empty.cant perform pop";
    }
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty.cant perform peek";
    }
    return this.stack[this.size() - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(40);
console.log(stack.peek());
