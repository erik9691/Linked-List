class LinkedList {
	constructor() {}

	headNode = null;
	tailNode = null;
	length = 0;

	append(value) {
		const newNode = new Node(value);

		if (this.headNode === null) {
			this.headNode = newNode;
			this.tailNode = newNode;
		} else {
			this.tailNode.nextNode = newNode;
			this.tailNode = newNode;
		}

		this.length += 1;
	}
	prepend(value) {
		const newNode = new Node(value);

		if (this.headNode === null) {
			this.headNode = newNode;
			this.tailNode = newNode;
		} else {
			newNode.nextNode = this.headNode;
			this.headNode = newNode;
		}

		this.length += 1;
	}
	size() {
		return this.length;
	}
	head() {
		return this.headNode;
	}
	tail() {
		return this.tailNode;
	}
	at(index) {
		if (index < 0) {
			throw new Error("ERROR index must be 0 or higher");
		} else if (index + 1 > this.length) {
			throw new Error("ERROR index can't be larger than list");
		} else if (index === 0) {
			return this.headNode;
		} else if (index + 1 === this.length) {
			return this.tailNode;
		} else {
			let currentNode = this.headNode;
			for (let i = 0; i < index; i++) {
				currentNode = currentNode.nextNode;
			}
			return currentNode;
		}
	}
	pop() {
		if (this.length === 1) {
			this.headNode = null;
			this.tailNode = null;
			this.length -= 1;
		} else if (this.length === 0) {
			throw new Error("Can't pop an empty list");
		} else {
			const secondToLastNode = this.at(this.length - 2);
			secondToLastNode.nextNode = null;
			this.tailNode = secondToLastNode;
			this.length -= 1;
		}
	}
	contains(value) {
		let currentNode = this.headNode;
		for (let i = 0; i < this.length; i++) {
			if (currentNode.value === value) {
				return true;
			}
			currentNode = currentNode.nextNode;
		}
		return false;
	}
}

class Node {
	value = null;
	nextNode = null;

	constructor(value) {
		this.value = value;
	}
}

const list = new LinkedList();

list.append("dude");
list.append("bro");
list.prepend("yes");
list.pop();
