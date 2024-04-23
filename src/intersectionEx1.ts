type MusicFileData = {
  artist: string
  duration: number
}

type BaseFileData = {
  name: string
  createdAt: string
  updatedAt?: string
}

const runIntersectionEx1 = () => {
  console.group('run Intersection Ex1')

  /**
   * 여러 타입의 **property** 을 모두 가지고 있어야 하는 경우, intersection(`&`) 사용하여 해결할 수 있음
   */
  const sampleList: (MusicFileData & BaseFileData)[] = [
    {
      artist: 'BIBI',
      name: '밤양갱',
      createdAt: '2024-03-01T00:00:01+0900',
      duration: 146,
    },
    {
      artist: 'Ed Sheeran',
      name: 'Bad habits',
      createdAt: '2024-03-02T00:00:01+0900',
    },
    {
      artist: '윤하',
      createdAt: '2024-03-03T09:00:01+0900',
      duration: 300,
    },
  ]

  console.log(sampleList)

  console.groupEnd()
}

runIntersectionEx1()
