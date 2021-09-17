module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '.*\\.(vue)$': '@vue/vue3-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
