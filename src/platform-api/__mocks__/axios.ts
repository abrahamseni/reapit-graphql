const axiosMock = {
  create: jest.fn(function (this: any) {
    return this
  }),
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
  patch: jest.fn(() => Promise.resolve({ data: {} })),
}

export default axiosMock
