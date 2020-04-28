// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    let head = this.head;
    let node = new Node(data, head);
    head = node;
  }
  size() {
    let current = this.head;
    let count = 0;
    while (current != null) {
      current = current.next;
      count++;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!node) return null;

    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }
  removeFirst() {
    let node = this.head;
    if (!node) return null;

    this.head = node.next;
  }

  removeLast() {
    let previous = this.head;
    let current = previous.next;

    if (!previous) return;
    if (!current) {
      this.head = null;
      return;
    }
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
    }
    let lastNode = this.getLast();
    lastNode.next = node;
  }
  getAt(index) {
    let counter = 0;
    let current = this.head;

    while (current) {
      if (counter == index) return current;
      current = current.next;
      counter++;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) return null;
    if (index == 0) {
      this.head = this.head.next;
      return;
    }
    let previous = this.getAt(index - 1);

    if (!previous || !previous.next) return null;
    previous.next = previous.next.next;
  }
  insertAt(data, index) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    if (index == 0) {
      this.head = node;
      return;
    }
    let current = this.head;
    let counter = 0;
    while (current) {
      if (counter === index) {
        let temp = current.next;
        current.next = node;
        node.next = temp;
        return;
      }
      current = current.next;
      counter++;
    }
    current.next = node;
  }
}

module.exports = { Node, LinkedList };
