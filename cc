# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: 点点滴滴
subtitle:
description: 点点滴滴,重在积累。
author: Xion
language: zh-Hans
timezone:

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: https://xqmcode.coding.me/
root: /
permalink: :title.html
permalink_defaults:

# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render: [google6b087412bce0c9a5.html]

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
# 代码高亮设置
highlight:
  enable: true
  line_number: true
  # 代码自动高亮
  auto_detect: true
  tab_replace:

# 搜索
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
  
# Home page setting
# path: Root path for your blogs index page. (default = '')
# per_page: Posts displayed per page. (0 = disable pagination)
# order_by: Posts order. (Order by date descending by default)
index_generator:
  path: ''
  per_page: 10
  order_by: -date
  
# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss

# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page


## 修改归档页面、某一分类页面、某一标签页面的显示篇数
## 参考：http://theme-next.iissnan.com/faqs.html#setting-page-size
archive_generator:
  per_page: 0
  yearly: false
  monthly: false
  daily: false
  
  # emoji 支持
githubEmojis:
  enable: true
  idName: github-emoji
  unicode: false
  styles:
  localEmojis:

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: next

Plugins:
- hexo-generator-feed
- hexo-generator-sitemap
#Feed Atom
feed:
  type: atom
  path: atom.xml
  limit: 20
#sitemap
sitemap:
  path: sitemap.xml
baidusitemap:
  path: baidusitemap.xml
  

baidu_url_submit:
  ## 比如3，代表提交最新的三个链接
  count: 3 
  ## 在百度站长平台中注册的域名
  host: xqmcode.coding.me
  ## 请注意这是您的秘钥，请不要发布在公众仓库里!
  token: W6snksJHJP5d9KFb
  ## 文本文档的地址，新链接会保存在此文本文档里
  path: baidu_urls.txt 
  
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
- type: baidu_url_submitter
- type: git
  repo: 
    github: git@github.com:xqmGitHub/xqmgithub.github.io
    coding: git@git.coding.net:xqmcode/xqmcode.git
  branch: master
