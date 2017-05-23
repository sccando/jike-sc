//启用 fis-spriter-csssprites 插件
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

//开启 md5 戳
fis.match('*.{js,css,jpg,png}', {
  useHash: true
});

//压缩 js 文件
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

//压缩 css 文件
fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

//压缩 png 文件
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

//压缩 html 文件
fis.match('*.html', {
  optimizer: fis.plugin('html-minifier')
});