const LinkedList = class {
    constructor(head)
    {
        this.headNode = head;
    }
    append(value) {
        const node = new Node(value, null);
        if (!this.headNode) this.headNode = node;
        else {
            let index = this.headNode;
            for (let i = 0; i < this.size(); i++) {
                index = index.nextNode;
            }
            index.nextNode = node;
        } 
    }
    prepend(value) {
        const temp = this.headNode;
        this.headNode = new Node(value, temp);
    }
    size() {
        let n = 0;
        let index = this.headNode;
        while (index) {
            index = index.nextNode;
            n++;
        }
        return n - 1;
    }
    head() {
        return this.headNode;
    }
    tail() {
        let index = this.headNode;
        for (let i = 0; i < this.size(); i++) {
            index = index.nextNode;
        }
        return index;
    }
    at(index) {
        if (index < 0 || index > this.size()) return;
        let incIndex = this.headNode;
        for (let i = 0; i < index; i ++) {
            incIndex = incIndex.nextNode;
        }
        return incIndex;
    }
    pop() {
        this.at(this.size() - 1).nextNode = null;
    }
    contains(value)
    {
        let index = this.headNode;
        for (let i = -1; i < this.size(); i++) {
            if (index.value === value) return true;
            index = index.nextNode;
        }
        return false;
    }
    find(value) {
        let index = this.headNode;
        for (let i = -1; i < this.size(); i++) {
            if (index.value === value) return index;
            index = index.nextNode;
        }
        return null;
    }
    toString() {
        let index = this.headNode;
        let string = '';
        for (let i = 0; i < this.size() + 1; i++) {
            string += '( ' + index.value + ' )';
            string += ' -> ' 
            index = index.nextNode;
        }
        return string + ' null';
    }
    insertAt(value, index) {
        this.at(index - 1).nextNode = new Node(value, this.at(index));
        return;
    }
    removeAt(index) {
        this.at(index - 1).nextNode = this.at(index + 1);
    }
}

const Node = class {
    constructor(value, nextNode)
    {
        this.value = value;
        this.nextNode = nextNode;
    }
}

// test cases
const list = new LinkedList;
list.append('first');
list.append('infinity');
list.append('second');
list.append('third');
list.append('fifth');
list.prepend('zeroeth');
list.prepend('neg-first');
list.insertAt('fourth', 6);
list.removeAt(3);
console.log(list);
console.log(list.toString());
