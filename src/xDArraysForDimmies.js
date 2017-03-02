export function dim(...a) {
  return a.length > 1 ? [...Array(a.shift())].map(()=>dim(...a)) : typeof a[0] === "function" ? a[0]() : a[0]
}
