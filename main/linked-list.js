class LinkedList {
	constructor() {}

	nodes = [];

	append(value) {
		const newNode = new Node(value);

		if (this.nodes.length > 0) {
			const prevNode = this.nodes.slice(-1)[0];
			prevNode.nextNode = newNode;
		}

		this.nodes.push(newNode);
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
console.log(list.nodes[0].nextNode);
