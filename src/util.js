export function isDef(v) {
  return v !== undefined && v !== null;
}
export function isUndef(v) {
  return v === undefined || v === null;
}
// vnode类型是否一样
export function sameVnode(a, b) {
  return (
    a.data.key === b.data.key &&
    a.tag === b.tag &&
    isDef(a.data) === isDef(b.data)
  );
}
/**
 * @description data是否变更
 * @param {Object} oldData
 * @param {Object} newData
 * @returns true/false
 */
export function dataChanged(oldData, newData) {
  const oldDataKeys = Object.keys(oldData);
  const newDataKeys = Object.keys(newData);
  let flag = false;
  if (oldDataKeys.length !== newDataKeys.length) {
    flag = true;
  } else {
    for (let i = 0; i < oldDataKeys.length; i++) {
      const oldKey = oldDataKeys[i];
      const oldValue = oldData[oldKey];
      if (newData[oldKey] !== oldValue) {
        flag = true;
        break;
      }
    }
  }
  return flag;
}

export function findIdxInOld(node, oldCh, start, end) {
  for (var i = start; i < end; i++) {
    var c = oldCh[i];
    if (isDef(c) && sameVnode(node, c)) {
      return i;
    }
  }
}

export function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].data.key;
    if (isDef(key)) {
      map[key] = i;
    }
  }
  return map;
}

export function addVnodes(parentElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    const now = vnodes[startIdx];
    parentElm.appendChild(createElement(now));
  }
}

export function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    const now = vnodes[startIdx];
    now && parentElm.removeChild(now.$el);
  }
}
