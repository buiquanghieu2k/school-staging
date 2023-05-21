module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.ios.js', '.android.js', '.ts', '.json', '.js', '.tsx'],
        alias: {
          '@Api': ['./src/Api'],
          '@Assets': ['./src/Assets'],
          '@Components': ['./src/Components'],
          '@Configs': ['./src/Configs'],
          '@Containers': ['./src/Containers'],
          '@Navigations': ['./src/Navigations'],
          '@Screens': ['./src/Screens'],
          '@Utils': ['./src/Utils'],
          '@Store': ['./src/Store'],
          '@Types': ['./src/Types'],
          '@Themes': ['./src/Themes'],
          '@Constants': ['./src/Constants'],
          '@Languages': ['./src/Languages'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
