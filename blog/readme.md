### 这是一个学习用的node博客，大体跟着N-blog写的。
Node+Express+Jade+MongoDB
#### 目前已经完成的功能有：
* 注册/登录
* 发表文章（标题，内容）
* 支持markdown格式
* flash通知
* 简单的文件上传
* 编辑、删除已发表的文章
* 页面权限控制（登录用户才可以访问）
* 用户文章汇总
* 简单分页
* 按年度文章存档
* 评论功能
* 评论统计和pv统计
* 文章标签功能
* 按关键字搜索文章标题
* 404页面

#### 感想
以后数据库操作换用mongoose，connect-mongo因为一个数据库链接手动提前关了，结果后面操作没法执行，找了半天错。
