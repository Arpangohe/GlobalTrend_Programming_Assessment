class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        if (this.map[key]) {
            delete this.map[key];
            return true;
        }
        return false;
    }

    size() {
        return Object.keys(this.map).length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.map = {};
    }

    keys() {
        return Object.keys(this.map);
    }

    values() {
        return Object.values(this.map);
    }
}
let map = new HashMap();
map.put('name', 'Arpan');
map.put('age', 22);
console.log(map.get('name'));
console.log(map.get('age'));
map.remove('age');
console.log(map.get('age'));
console.log(map.size());
console.log(map.isEmpty());
map.clear();
console.log(map.isEmpty());
