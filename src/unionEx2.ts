/**
 * 하나의 변수가 union 으로 되어 있으면 정확히 어떤 타입인지 알 수 없음
 *
 * 따라서 각 타입의 공통적으로 정의된 **property** 에만 접근 가능함
 */
function toFixed(strOrNumValue: string | number) {
  /**
   * `toFixed` 는 number 에만 정의된 prop
   *
   * strOrNumValue 는 string 값일 수 있기 때문에 `toFixed` 를 호출하려고 하면 컴파일 에러가 발생
   *
   * 실제 값을 넣어 호출 할 경우에도 에러가 발생함
   */
  // const result = strOrNumValue.toFixed(3)

  // return result

  if (typeof strOrNumValue === 'string') {
    return (+strOrNumValue).toFixed(3)
  } else {
    return strOrNumValue.toFixed(3)
  }
}

function runUnionEx2() {
  console.group('run Union Ex2')

  const sampleList = [1, '1.111', '9123', '9000', '1982131.1234']

  sampleList.forEach(value => {
    console.log('toFixed(%s) = %s', value, toFixed(value))
  })

  console.groupEnd()
}

runUnionEx2()
