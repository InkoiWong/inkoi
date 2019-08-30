// 获取get方法的参数
export const getQueryParameters = options => {
  // console.log('get方法options：', options)

  const url = options.url
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
}

// 获取post方法的参数
export const getBody = options => {
  // console.log('post方法options：', options)

  return options.body && JSON.parse(options.body)
}

// -----------------------------
// 基础响应体
const responseBody = {
  result: null,
  message: '',
  code: 0,
  timestamp: 0
}

export const builder = (data, message, code = 0, headers = {}) => {
  responseBody.result = data

  if (message !== undefined && message !== null) {
    responseBody.message = message
  }

  if (code !== undefined && code !== 0) {
    responseBody.code = code
    responseBody._status = code
  }

  responseBody.timestamp = new Date().getTime()

  if (headers !== null && typeof headers === 'object' && Object.keys(headers).length > 0) {
    responseBody._headers = headers
  }

  return responseBody
}
