type UserCollection = {
  id: string
  list: string[]
}

type Guild = {
  name: string
  list: number[]
}

const runIntersectionEx2 = () => {
  console.group('run Intersection Ex2')

  /**
   * 다른 두 타입에서 같은 이름의 **property** 가 다른 타입일 경우 문제가 발생함
   *
   * 두 타입 모두 `list` 라는 **property** 을 가지고 있음
   *
   * 둘 중 어느 `list` 를 참조해야 하는지 알 수 없으므로 **type** 이 **never** 가 됨
   */
  const sampleData: UserCollection & Guild = {
    id: 'test id',
    name: 'test name',
    list: ['USER01', 1, 'USER02', 2],
  }

  console.log(sampleData)

  console.groupEnd()
}

runIntersectionEx2()
