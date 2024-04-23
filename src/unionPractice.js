class HttpRequest {
  url = null
  method = null // 'GET' | 'POST'
  headers = {
    'Content-Type': 'application/json',
  }
  body = null

  constructor({ url, method, headers, body }) {
    this.url = url
    this.method = method
    this.headers = headers ?? this.headers
    this.body = body
  }
}

class HttpGetRequest extends HttpRequest {
  constructor({ url, headers }) {
    super({ method: 'GET', url, headers })
  }
}

class HttpPostRequest extends HttpRequest {
  constructor({ url, headers, body }) {
    super({ method: 'POST', url, headers, body })
  }
}

const http = request => {
  console.log(request)
  return Promise.resolve({})
}

http(new HttpGetRequest({ url: '/api/v1/users/user_01' }))
http(
  new HttpPostRequest({ url: '/api/v1/users', body: { name: '철수', age: 10 } })
)
