/**
 * 하나의 값이 여러 타입일 경우, union(`|`) 을 사용하여 해결할 수 있음
 */
function sum(val1: string | number, val2: string | number) {
  return +val1 + +val2
}

function runUnionEx1() {
  console.group('run Union Ex1')

  const sampleList = [
    ['1', 2],
    [10, '30'],
    ['999', '1'],
    [456, 123],
  ]

  sampleList.forEach(([v1, v2]) => {
    console.log('%s + %s = %s', v1, v2, sum(v1, v2))
  })

  console.groupEnd()
}

runUnionEx1()
