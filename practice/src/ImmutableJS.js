import React, { Component } from 'react';
import Immutable from 'immutable';

// Immutable JS
/* 一般 javascript 的 object 資料是 mutable (可變的)，所以當修改到複製的值也會改到原始值，
Immutable JS 就是為此而產生的 (deepCopy 有相同效果但耗效能) */

// 一般 js object 的資料會因 map2 的改變而改變 map1 的值
var map1 = { a: 1 }; 
var map2 = map1; 
map2.a = 2
console.log(map1.a); //2
console.log(map2.a); //2

// Immutable JS 提供 7 種不可修改的資料類型，常用的有 Map, List 和 Set

// for example 資料不可修改
const map1 = Immutable.Map({ a: 1, b: 3 });
const map2 = map1.set('a', 2);

console.log(map1.get('a')); // 1
console.log(map2.get('a')); // 2


// ** Map (key / value 的 object) **

// 1. Map 數量
const Map = Immutable.Map;
const map3 = Map({a: 1, b: 2, c: 3, d: 4});
console.log(map3.size); // 4

// 2. 新增或取代 Map 元素
// set(key: K, value: V)
const map4 = map3.set('a', 7);
console.log(map4.get('a')); // 7

// 3. 刪除元素
// delete(kay: K)
const map5 = map3.delete('a');
console.log(map5.get('a')); // undefined

// 4. 清除 Map 內容
const map6 = map3.clear();
console.log(map6); //Map{}

// 5. 更新 Map 元素
// update(updater: (value: Map<K, V>) => Map<K, V>)
// update(key: K, updater: (value: V) => V)
// update(key: K, notSetValue: V, updater: (value: V) => V)
const map7 = map3.update('a', () => (11));
console.log(map7.get('a')); // 11

// 6. 合併 Map
const map8 = Map({e: 5});
const map9 = Map({a: 1, b: 2, c: 3, d: 4});
const map10 = map9.merge(map8);
console.log(map10); // Map { "a": 1, "b": 2 ,'c': 3, 'd': 4,'e': 5}


// ** List (有順序且可以重複，對應一般的 Array) **

const List = Immutable.List;

// 1. 取得 List 數量
const arr1 = List([1, 2, 3]);
console.log(arr1.size); // 3

// 2. 新增或取代 List 元素內容
// set(index: number, value: T)
const arr2 = arr1.set(-1, 7); // -1 表示從最後一個開始計算，-2 為倒數第二個...
console.log(arr2); // [1, 2, 7]
const arr3 = arr1.set(4, 5);
console.log(arr3); // [1, 2, 3, empty, 5]

// 3. 刪除 List 元素
// delete(index:number)
const arr4 = arr1.delete(1);
console.log(arr4); // [1, 3]

// 4. 插入元素到 List
// insert(index: number, value: T)
const arr5 = arr1.insert(1, 4);
console.log(arr5); // [1, 4, 2, 3]

// 5. 清空 List
const arr6 = arr1.clear();
console.log(arr6); // []


// ** Set (沒有順序且不能重複的列表) **

const Set = Immutable.Set;

// 1. 建立 Set
const set1 = Set([1, 2, 3]);
console.log(set1); // Set {1, 2, 3}

// 2. 新增元素
const set2 = set1.add(1).add(5);
console.log(set2); // Set {1, 2, 3, 5} 因為 1 已經存在，所以不會重複出現

// 3. 刪除元素
const set3 = set1.delete(3);
console.log(set3); // Set {1, 2}

// 4. 取聯集
const set4 = Set([2, 3, 4, 5])
const set5 = set1.union(set4);
console.log(set5); // Set {1, 2, 3, 4, 5}

// 5. 取交集
const set6 = set1.intersect(set4);
console.log(set6); // Set {2, 3}

// 6. 取差集
const set7 = set1.subtract(set4);
console.log(set7); // Set {1}


/* Immutable JS 為了維持資料不可變，又要避免像 deepCopy 一樣，複製所有節點造成資源損耗
   ，所以採用 Structural Sharing 的特性，意指如果物件樹中的一個節點發生變化，只修改這個節
   點和受它影響的父節點，其他節點不變 */

   const obj = {
    count: 1,
    list: [1, 2, 3, 4, 5]
} 

var map1 = Immutable.fromJS(obj);
console.log(map1); // { ['count', 1] [1, 2, 3, 4, 5]}
var map2 = map1.set('count', 4);
console.log(map2); // { ['count', 4] [1, 2, 3, 4, 5]} 只有 count 改變，list 不變
console.log(map1.list === map2.list); // true

// fromJS()：直接將 javascript 的物件或陣列，轉換成對應 ImmutableJS 的結構

/* ImmutableJS 提供原生 javascript 的轉換，像是 fromJS()、toJS()，但是轉換很耗費資源
   ，建議盡量維持資料在 Immutable 的狀態*/


export default ImmutableJS;