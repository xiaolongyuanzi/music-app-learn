export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
  // return el.classList.contains(className)
}

export function addClass(el, className) {
  if (hasClass(el,className)) {
    return
  }
  let newClass = el.className.split(' ') //获取className
  newClass.push(className)
  el.className = newClass.join(' ')
  // el.classList.add(className)
}
// 获取元素索引，或者其他属性值
export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}

// let elementStyle = document.createElement('div').style

// let vendor = (() => {
//   let transformNames = {
//     webkit: 'webkitTransform',
//     Moz: 'MozTransform',
//     O: 'OTransform',
//     ms: 'msTransform',
//     standard: 'transform'
//   }

//   for (let key in transformNames) {
//     if (elementStyle[transformNames[key]] !== undefined) {
//       return key
//     }
//   }

//   return false
// })()

// export function prefixStyle(style) {
//   if (vendor === false) {
//     return false
//   }

//   if (vendor === 'standard') {
//     return style
//   }

//   return vendor + style.charAt(0).toUpperCase() + style.substr(1)
// }
